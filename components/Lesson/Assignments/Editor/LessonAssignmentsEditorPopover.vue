<template>
  <div
    v-if="!pending"
    class="flex w-[24rem] flex-col rounded border bg-white p-2.5 shadow-lg"
  >
    <h2 class="mb-2 text-lg">Редагування</h2>
    <hr class="mb-2" />

    <TextField :disabled="isSaving" name="title" placeholder="Назва" />

    <TextField
      :disabled="isSaving"
      name="description"
      placeholder="Додатковий опис"
    />

    <TextField
      :disabled="isSaving"
      name="deadline"
      placeholder="Додатковий опис"
      type="datetime-local"
    />
    <div class="mt-2 flex flex-row justify-end">
      <MdButton
        :disabled="isSaving"
        :loading="isSaving"
        class="text-gray-600"
        size="default"
        variant="outline"
        @click="save"
      >
        Зберегти
      </MdButton>
    </div>
  </div>
  <div v-else class="flex flex-col"></div>
</template>

<script lang="ts" setup>
import { object, string } from 'zod';
import { UpdateAssignmentRequest } from '~/api/assignment/requests';
import { assignments as assignmentRepository } from '~/api/repositories';

const props = defineProps<{
  assignmnentId: string;
}>();
const emit = defineEmits<{
  (e: 'cancel'): void;
  (e: 'save'): void;
}>();

const {
  data: assignment,
  pending,
  execute
} = await assignmentRepository.find.asyncData({
  immediate: false,
  routeParams: {
    id: props.assignmnentId
  }
});
onMounted(async () => {
  await execute();

  if (!assignment.value) {
    console.warn('Assignment not found');
    return;
  }

  form.setValues({
    title: assignment.value.data.title,
    description: assignment.value.data.description,
    deadline: assignment.value.data.deadline
  });
});

const form = useForm<UpdateAssignmentRequest>({
  validationSchema: object({
    title: string().max(70),
    description: string().optional(),
    deadline: string().optional()
  })
});

const isSaving = ref(false);

async function save() {
  if (!(await form.validate()).valid) {
    return;
  }

  isSaving.value = true;
  await assignmentRepository.update.asyncData({
    routeParams: {
      id: props.assignmnentId
    },
    body: form.values
  });
  isSaving.value = false;
  emit('save');
}
</script>
