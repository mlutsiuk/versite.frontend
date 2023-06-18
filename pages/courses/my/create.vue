<template>
  <div class="grow space-y-2.5 px-5 py-2.5">
    <div class="flex flex-row items-center">
      <h2 class="text-xl font-medium leading-8">Створення курсу</h2>
    </div>

    <hr />

    <div class="flex flex-row space-x-4">
      <div class="basis-5/12">
        <TextField class="mb-3" name="title" placeholder="Назва" />
        <TextField class="mb-3" name="description" placeholder="Опис" />

        <div
          block
          class="cursor-pointer space-x-4 whitespace-nowrap rounded bg-gray-100 px-1.5 py-3 text-center text-lg transition-colors hover:bg-gray-200"
          @click="createCourse"
        >
          Створити
        </div>
      </div>

      <div class="w-px bg-gray-300"></div>

      <div class="basis-7/12">
        <h1
          :class="{
            'text-gray-400': form.values.title?.length == 0
          }"
          class="text-6xl"
        >
          {{ form.values.title?.length == 0 ? 'Назва' : form.values.title }}
        </h1>

        <div
          :class="{
            'text-gray-400': form.values.description?.length == 0
          }"
          class="mt-8 text-xl"
        >
          {{
            form.values.description?.length == 0
              ? 'Опис'
              : form.values.description
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { object, string } from 'zod';
import { CreateCourseRequest } from '~/api/courses';
import { courses } from '~/api/repositories';

const form = useForm<CreateCourseRequest>({
  validationSchema: object({
    title: string().min(4).max(32),
    description: string().min(15).max(100)
  }),
  initialValues: {
    title: '',
    description: ''
  }
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
