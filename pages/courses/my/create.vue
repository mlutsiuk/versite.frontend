<template>
  <div class="space-y-2.5 px-5 py-2.5">
    <div class="flex flex-row items-center">
      <h2 class="text-xl font-medium leading-8">Створення курсу</h2>
    </div>

    <hr />

    <TextField class="mb-3" name="title" placeholder="Title" />
    <TextField class="mb-3" name="description" placeholder="Description" />

    <MdButton block class="text-[#3A84AD]" size="x-large" @click="createCourse">
      Create
    </MdButton>
  </div>
</template>

<script lang="ts" setup>
import { CreateCourseRequest } from '~/api/courses';
import { courses } from '~/api/repositories';
import { object, string } from 'zod';

const form = useForm<CreateCourseRequest>({
  validationSchema: object({
    title: string().min(4).max(32),
    description: string().min(15).max(100)
  })
});

async function createCourse() {
  if (!(await form.validate()).valid) {
    return;
  }

  const { data, error } = await courses.create.asyncData({
    body: form.values
  });

  if (data.value) {
    navigateTo({
      name: 'courses-id-lessons',
      params: {
        id: data.value.data.id
      }
    });
  }
}
</script>
