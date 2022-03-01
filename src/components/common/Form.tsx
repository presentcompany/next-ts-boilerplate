import { useState } from 'react';
import { FormProvider as HookFormProvider, useForm } from 'react-hook-form';

import type { ReactNode } from 'react';
import type { FormProviderProps, UseFormProps } from 'react-hook-form';

type TFormProps = {
  children: ReactNode;
  config: UseFormProps;
  onSubmitForm: (values: any) => Promise<void | IOnSubmitResult>;
};
interface IOnSubmitResult {
  FORM_ERROR?: string;
  [prop: string]: any;
}

type TFormProviderProps = FormProviderProps & {
  submissionError?: string | null;
};

export const FORM_ERROR = 'FORM_ERROR';

const FormProvider = ({ children, ...props }: TFormProviderProps) => (
  <HookFormProvider {...props}>{children}</HookFormProvider>
);

export function Form({ children, config, onSubmitForm }: TFormProps) {
  const form = useForm({
    ...config
  });

  // * NOTE: this is for form submission errors that are NOT due to field validation errors eg. connectivity issues, 400 errors, etc.
  const [formSubmissionError, setFormSubmissionError] = useState<string | null>(
    null
  );

  return (
    <FormProvider {...form} submissionError={formSubmissionError}>
      <form
        noValidate
        onSubmit={form.handleSubmit(async (values) => {
          const result = (await onSubmitForm(values)) || {};

          if (!!result.FORM_ERROR) {
            setFormSubmissionError(result.FORM_ERROR);
          }
        })}
      >
        {children}
      </form>
    </FormProvider>
  );
}
