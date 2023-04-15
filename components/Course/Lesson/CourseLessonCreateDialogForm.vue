<template>
  <div>
    <h2 class="mb-2.5 text-xl font-medium">Додати урок</h2>

    <hr class="mb-4" />

    <TextField class="mb-3" name="title" placeholder="Назва" />
    <TextField
      class="mb-3"
      name="date"
      placeholder="Дата"
      type="datetime-local"
    />

    <div class="flex flex-row justify-end">
      <MdButton
        :disabled="loading"
        class="mr-2 text-gray-600"
        size="large"
        variant="outline"
        @click="emit('cancel')"
      >
        Скасувати
      </MdButton>

      <MdButton
        :disabled="loading"
        :loading="loading"
        class="mr-2 text-gray-600"
        size="large"
        variant="outline"
        @click="create"
      >
        Створити
      </MdButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CreateLessonRequest } from '~/api/lesson';
import { lessons } from '~/api/repositories';
import { object, string } from 'zod';
import dayjs from 'dayjs';

const props = defineProps<{
  courseId: string;
}>();
const emit = defineEmits<{
  (e: 'cancel'): void;
}>();

const form = useForm<Omit<CreateLessonRequest, 'course_id'>>({
  validationSchema: object({
    title: string().min(4).max(32),
    date: string()
  }),
  initialValues: {
    title: '',
    date: dayjs().format('YYYY-MM-DDTHH:mm')
  }
});

const loading = ref(false);

async function create() {
  if (!(await form.validate()).valid) {
    return;
  }

  loading.value = true;
  const { data } = await lessons.create.asyncData({
    body: {
      title: form.values.title,
      date: dayjs(form.values.date).toISOString(),
      course_id: props.courseId
    }
  });
  loading.value = false;

  if (data.value) {
    navigateTo({
      name: 'lessons-id-edit',
      params: {
        id: data.value.data.id
      }
    });

    useSnackbar().add({
      title: 'Урок успішно створено'
    });
  }
}
</script>
