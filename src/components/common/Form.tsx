import { FormProvider, useForm } from 'react-hook-form';

import type { ReactNode } from 'react';
import type { UseFormProps } from 'react-hook-form';

type TFormProps = {
  formConfig: UseFormProps;
  btnSubmitChildren: ReactNode;
  children: ReactNode;
  isSubmitDisabled?: boolean;
  onSubmitForm: () => void;
};

export function Form({
  btnSubmitChildren,
  children,
  formConfig,
  isSubmitDisabled,
  onSubmitForm
}: TFormProps) {
  const form = useForm({
    ...formConfig
  });

  return (
    <FormProvider {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmitForm)}>
        {children}

        <button
          type="submit"
          disabled={form.formState.isSubmitting || isSubmitDisabled}
        >
          {btnSubmitChildren}
        </button>
      </form>
    </FormProvider>
  );
}
