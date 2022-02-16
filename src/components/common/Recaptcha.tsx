import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FormControl, Text } from '@chakra-ui/react';

type TRecaptchaProps = {
  id?: string;
  errorMsg?: string;
  onChange?: (token: string | null) => void;
};

export function Recaptcha({
  id,
  onChange,
  errorMsg
}: TRecaptchaProps): React.ReactElement {
  const RECAPTCHA_API_KEY =
    process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA_API || '';

  return (
    <FormControl id={id} mb="2em" className={'g-recaptcha'}>
      <ReCAPTCHA sitekey={RECAPTCHA_API_KEY} onChange={onChange} />

      {!!errorMsg && (
        <Text fontSize="0.63rem" textTransform="capitalize" color="orange.100">
          {errorMsg}
        </Text>
      )}
    </FormControl>
  );
}
