<template>
  <div>
    <h1 class="text-3xl">Course Create</h1>
    <TextField
      class="mb-1"
      name="slug"
      placeholder="Slug"
    />
    <TextField
      class="mb-3"
      name="title"
      placeholder="Title"
    />
    <TextField
      class="mb-3"
      name="description"
      placeholder="Description"
    />

    <MdButton
      block
      class="text-[#3A84AD]"
      size="x-large"
      @click="createCourse"
    >
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
    slug: string().min(4).max(32),
    title: string().min(4).max(32),
    description: string().min(15).max(100)
  })
});

async function createCourse() {
  if (!(await form.validate()).valid) {
    return;
  }

  const { data, error } = await courses.create.asyncData({
    key: 'courses:create',
    body: form.values
  });

  if(data.value) {
    navigateTo(`/courses/${data.value.data.slug}`);
  }
}
</script>
