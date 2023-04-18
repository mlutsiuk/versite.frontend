<template>
  <div class="flex flex-row space-x-2.5 rounded-sm bg-neutral-100 p-2.5">
    <UserAvatar :user="user" class="rounded-full" size="50px" />

    <div class="flex grow flex-col">
      <div class="flex flex-row items-center justify-between">
        <div class="text-lg">
          {{ user ? user.name : props.student.name }}
        </div>

        <Icon name="mdi:dots-vertical" size="24px" />
      </div>

      <div class="text-neutral-400">
        <div v-if="user" v-text="user.email" />
        <div v-else>
          <span
            v-if="props.student.invitation?.data"
            v-text="
              `Відправлено запрошення - ${
                props.student.invitation.data.email ??
                props.student.invitation.data.receiver?.data?.email
              }`
            "
          />
          <CourseStudentsInviteDialog
            v-else
            :student-id="props.student.id"
            @create="emit('create')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Student } from '~/api/models';

const props = defineProps<{
  student: Student;
}>();
const emit = defineEmits<{
  (e: 'create'): void;
}>();

const user = computed(() => props.student.user?.data);
</script>
