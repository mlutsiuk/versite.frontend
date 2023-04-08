<template>
  <div>
    <h1 class="text-3xl">Course edit</h1>
    <div class="text-sm text-gray-400">
      {{ $route.params.id }}
    </div>

    <TextField class="mb-1" name="slug" placeholder="Slug" />
    <TextField class="mb-3" name="title" placeholder="Title" />
    <TextField class="mb-3" name="description" placeholder="Description" />

    <MdButton block class="text-[#3A84AD]" size="x-large" @click="update">
      Create
    </MdButton>
  </div>
</template>

<script lang="ts" setup>
import { UpdateCourseRequest } from '~/api/courses';
import { courses } from '~/api/courses/repositories';
import { object, string } from 'zod';

const form = useForm<UpdateCourseRequest>({
  validationSchema: object({
    slug: string().min(4).max(32),
    title: string().min(4).max(32),
    description: string().min(15).max(100)
  })
});

async function loadCourse() {
  const { data, error } = await courses.find.asyncData({
    routeParams: {
      id: useRoute('courses-id-edit').params.id
    },
    immediate: true
  });

  if (data.value && !error.value) {
    let course = data.value.data;
    form.setValues({
      title: course.title,
      description: course.description
    });
  }
}

onMounted(loadCourse);

async function update() {
  if (!(await form.validate()).valid) {
    return;
  }

  const { data, error } = await courses.create.asyncData({
    key: 'courses:create',
    body: form.values
  });

  if (data.value) {
    navigateTo(`/courses/${data.value.data.id}`);
  }
}
</script>
