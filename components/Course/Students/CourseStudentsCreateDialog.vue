<template>
  <MdDialog>
    <template #activator="{ open }">
      <div
        class="flex cursor-pointer select-none flex-row rounded bg-gray-100 px-2 py-1 transition-colors hover:bg-gray-200"
        @click="open"
      >
        <Icon class="mr-1" name="mdi:plus" size="24px" />

        Створити
      </div>
    </template>

    <template #default="{ close }">
      <CourseStudentsCreateDialogForm
        :course-id="props.courseId"
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
  courseId: string;
}>();

const emit = defineEmits<{
  (e: 'create'): void;
}>();
</script>
