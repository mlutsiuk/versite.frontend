<template>
  <MdDialog>
    <template #activator="{ open }">
      <div
        class="w-min cursor-pointer select-none whitespace-nowrap rounded bg-gray-200 px-2 text-gray-600 transition-colors hover:bg-gray-300"
        @click="open"
      >
        Відправити запрошення
      </div>
    </template>

    <template #default="{ close }">
      <CourseStudentsInviteDialogForm
        :student-id="props.studentId.toString()"
        @cancel="close"
        @create="
          () => {
            emit('create');
            close();
          }
        "
      />
    </template>
  </MdDialog>
</template>

<script lang="ts" setup>
const props = defineProps<{
  studentId: string | number;
}>();

const emit = defineEmits<{
  (e: 'create'): void;
}>();
</script>
