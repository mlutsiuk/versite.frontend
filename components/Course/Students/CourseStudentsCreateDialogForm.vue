<template>
  <div>
    <h2 class="mb-2.5 text-xl font-medium">Додати студента</h2>

    <hr class="mb-4" />

    <TextField class="mb-3" name="name" placeholder="Ім'я" />

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
        class="text-gray-600"
        size="large"
        variant="outline"
        @click="create"
      >
        Додати
      </MdButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { students } from '~/api/repositories';
import { object, string } from 'zod';
import { CreateStudentRequest } from '~/api/student';

const props = defineProps<{
  courseId: string;
}>();
const emit = defineEmits<{
  (e: 'cancel'): void;
  (e: 'create'): void;
}>();

const form = useForm<Omit<CreateStudentRequest, 'course_id'>>({
  validationSchema: object({
    name: string().min(4).max(32)
  })
});

const loading = ref(false);

async function create() {
  if (!(await form.validate()).valid) {
    return;
  }

  loading.value = true;
  const { data } = await students.create.asyncData({
    body: {
      name: form.values.name,
      course_id: props.courseId
    }
  });
  loading.value = false;

  if (data.value) {
    emit('create');

    useSnackbar().add({
      title: 'Студента додано',
      text: 'Тепер ви можете відправити запрошення іншому користувачу на приєднання до курсу на це місце'
    });
  }
}
</script>
