import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';

import MailchimpSubscribe, {
  DefaultFormFields
} from 'react-mailchimp-subscribe';

import { Flex } from '@chakra-ui/react';
import { validator } from '@/utils/formValidationSchema';

import { LabeledTextField } from './LabeledTextField';

export function Newsletter() {
  const validationSchema = Joi.object({
    newsletter_email: validator.email()
  });

  const form = useForm({
    resolver: joiResolver(validationSchema)
  });

  const onSubmit =
    (enrollNewsletter: (props: DefaultFormFields) => void) => (data: any) => {
      if (!!data?.email) {
        enrollNewsletter({ EMAIL: data.newsletter_email });
      }
    };

  return (
    <MailchimpSubscribe
      url={process?.env?.NEXT_PUBLIC_MAILCHIMP_SUBSCRIBE_URL || ''}
      render={({ subscribe, status, message }) => {
        const hasSignedUp = status === 'success';
        const isMailchimpSubmissionError = status === 'error';

        return (
          <FormProvider {...form}>
            <form noValidate onSubmit={form.handleSubmit(onSubmit(subscribe))}>
              {isMailchimpSubmissionError && (
                <div>Failed to submit. Please try again later.</div>
              )}

              {hasSignedUp && (
                <div>You have successfully signed up for our newsletter</div>
              )}

              {!hasSignedUp && (
                <Flex>
                  <LabeledTextField
                    name="newsletter_email"
                    placeholder="Enter your email address"
                    type="email"
                    labelText="Sign up to our newsletter"
                  />

                  <button type="submit" disabled={hasSignedUp}>
                    Submit
                  </button>
                </Flex>
              )}
            </form>
          </FormProvider>
        );
      }}
    />
  );
}
