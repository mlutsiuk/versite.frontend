<template>
  <Popover :offset="[0, 8]">
    <template #activatior="{ isOpen }">
      <div
        :class="[isOpen ? 'bg-neutral-200' : 'hover:bg-neutral-200']"
        class="group relative space-y-1 rounded-sm bg-neutral-100 px-2 py-2 transition-colors"
      >
        <div
          :class="{
            'badge-unsubmitted': !submission,
            'badge-unchecked': submission && !submission.is_checked,
            'badge-checked': submission && submission.is_checked
          }"
          class="absolute right-0.5 top-0.5 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full"
        ></div>

        <DevOnly>
          <DevDataId :id="assignment.id" />
        </DevOnly>

        <div class="text-xl font-medium leading-snug">
          {{ assignment.title }}
        </div>

        <div class="text-base font-medium text-gray-600">
          {{ assignment.description }}
        </div>

        <div v-if="assignment.deadline" class="leading-tight">
          <div
            class="flex flex-row items-center space-x-2 rounded text-gray-600"
          >
            <span
              v-text="dayjs(assignment.deadline).format('DD.MM.YYYY HH:mm')"
            />
            <span class="text-gray-400">
              ({{ dayjs(assignment.deadline).fromNow() }})
            </span>
          </div>
        </div>

        <div v-if="submission">
          <hr
            class="mb-1 mt-1.5 transition-colors group-hover:border-gray-300"
          />

          <div v-if="!submission.is_checked">На перевірці</div>
          <div v-else-if="submission.mark" class="text-gray-600">
            Оцінено:
            <span class="font-medium" v-text="`${submission.mark} балів`" />
          </div>
          <div v-else>Перевірено</div>
        </div>
      </div>
    </template>

    <template #default>
      <div
        class="flex max-w-[40rem] flex-col rounded border bg-white py-2.5 shadow-lg"
      >
        <div class="mb-2 flex flex-row items-center justify-between px-2.5">
          <h2 class="text-lg">Подання</h2>

          <MdButton
            v-if="!submission"
            :disabled="loading"
            :loading="loading"
            class="text-gray-100"
            variant="tonal"
            @click="send"
          >
            Відправити
          </MdButton>
        </div>
        <hr />

        <SubmissionEditor v-if="!submission" v-model="html" />
        <div v-else class="Tiptap-LessonMaterial min-w-[40rem] px-2.5 py-2">
          <div v-html="submission.content" />
        </div>
      </div>
    </template>
  </Popover>
</template>

<script lang="ts" setup>
import { Assignment } from '~/api/models';
import dayjs from 'dayjs';
import { submissions } from '~/api/repositories';

const props = defineProps<{
  assignment: Assignment;
}>();
const emit = defineEmits<{
  (e: 'create:submission'): void;
}>();

const submission = computed(() => props.assignment.my_submission?.data);
const html = ref('');
const loading = ref(false);

async function send() {
  loading.value = true;
  await submissions.addMy.asyncData({
    body: {
      content: html.value
    },
    routeParams: {
      assignmentId: props.assignment.id
    }
  });
  loading.value = false;

  emit('create:submission');
  useSnackbar().add({
    title: 'Робота відправлена на перевірку'
  });
}
</script>

<style scoped>
.badge-unsubmitted {
  @apply bg-red-400;
}

.badge-unchecked {
  @apply bg-yellow-500;
}

.badge-checked {
  @apply bg-[#4CAF4F];
}
</style>
