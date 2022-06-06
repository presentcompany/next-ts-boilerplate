import React from 'react';

import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from 'react-google-recaptcha-v3';

import { FormControl, Text } from '@chakra-ui/react';

type TRecaptchaProps = {
  id?: string;
  errorMsg?: string;
  onChange: (token: string) => void | Promise<void>;
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
      <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_API_KEY}>
        <GoogleReCaptcha onVerify={onChange} />
      </GoogleReCaptchaProvider>

      {!!errorMsg && (
        <Text fontSize="0.63rem" textTransform="capitalize" color="orange.100">
          {errorMsg}
        </Text>
      )}
    </FormControl>
  );
}
