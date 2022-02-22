import React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import { validator } from '@/utils/formValidationSchema';
import { Form } from './Form';
import { LabeledTextField } from './LabeledTextField';

import type { DefaultFormFields } from 'react-mailchimp-subscribe';

export function Newsletter() {
  const validationSchema = Joi.object({
    newsletter_email: validator.email()
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
          <Form
            config={{ resolver: joiResolver(validationSchema) }}
            onSubmitForm={onSubmit(subscribe)}
          >
            {isMailchimpSubmissionError && (
              <div>Failed to submit. Please try again later.</div>
            )}

            {hasSignedUp && (
              <div>You have successfully signed up for our newsletter</div>
            )}

            {!hasSignedUp && (
              <Flex alignItems="center">
                <LabeledTextField
                  name="newsletter_email"
                  placeholder="Enter your email address"
                  type="email"
                  labelText="Sign up to our newsletter"
                />

                <Button type="submit" disabled={hasSignedUp}>
                  Submit
                </Button>
              </Flex>
            )}
          </Form>
        );
      }}
    />
  );
}
