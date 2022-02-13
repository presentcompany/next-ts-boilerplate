import React from 'react';
import { useForm } from 'react-hook-form';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';

import MailchimpSubscribe, {
  DefaultFormFields
} from 'react-mailchimp-subscribe';

import { Flex, Text } from '@chakra-ui/react';
import { validator } from '@/utils/formValidationSchema';

export function Newsletter() {
  const validationSchema = Joi.object({
    newsletter_email: validator.email()
  });

  const { formState, handleSubmit, register } = useForm({
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
          <form noValidate onSubmit={handleSubmit(onSubmit(subscribe))}>
            {hasSignedUp && (
              <div>You have successfully signed up for our newsletter</div>
            )}

            {!hasSignedUp && (
              <>
                <Text>Sign up to our newsletter</Text>

                <Flex>
                  <input
                    id="newsletter_email"
                    placeholder="Enter your email..."
                    type="text"
                    {...register('newsletter_email')}
                  />

                  <p>{formState.errors.newsletter_email?.message}</p>

                  <button type="submit" disabled={hasSignedUp}>
                    Submit
                  </button>
                </Flex>
              </>
            )}
          </form>
        );
      }}
    />
  );
}
