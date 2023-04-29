import { useForm as useVVForm } from 'vee-validate';
import { toFormValidator } from '@vee-validate/zod';
import { ZodSchema } from 'zod';

interface UseFormOptions<Schema> {
  validationSchema: ZodSchema<Schema>;
  validateOnMount?: boolean;
  initialValues?: Schema;
}

export function useForm<Schema extends Record<string, any>>(
  options: UseFormOptions<Schema>
) {
  const {
    validationSchema,
    validateOnMount,

    ...opts
  } = options;

  return useVVForm<Schema>({
    validationSchema: toFormValidator(validationSchema),
    validateOnMount: validateOnMount ?? false,

    ...opts
  });
}
