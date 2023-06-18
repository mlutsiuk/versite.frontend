<template>
  <div>
    <h2 class="mb-2.5 text-xl font-medium">Відправити запрошення</h2>

    <hr class="mb-4" />

    <TextField class="mb-3" name="email" placeholder="Електронна пошта" />

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
        Відправити
      </MdButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { object, string } from 'zod';
import { invitations } from '~/api/repositories';
import { CreateInvitationRequest } from '~/api/invitation';

const props = defineProps<{
  studentId: string;
}>();
const emit = defineEmits<{
  (e: 'cancel'): void;
  (e: 'create'): void;
}>();

const form = useForm<Omit<CreateInvitationRequest, 'student_id'>>({
  validationSchema: object({
    email: string().email()
  })
});

const loading = ref(false);

async function create() {
  if (!(await form.validate()).valid) {
    return;
  }

  loading.value = true;
  const { data } = await invitations.create.asyncData({
    body: {
      email: form.values.email,
      student_id: props.studentId
    }
  });
  loading.value = false;

  if (data.value) {
    emit('create');

    useSnackbar().add({
      title: 'Запрошення відправлено',
      text: 'Користувач отримає сповіщення на електронну пошту та у особистому кабінеті'
    });
  }
}
</script>
