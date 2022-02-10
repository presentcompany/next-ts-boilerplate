import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { useController } from 'react-hook-form';
import { isEmpty } from 'lodash';
import styled from '@emotion/styled';
import { FormHelperText } from '@chakra-ui/react';

import { Input } from './Input';
import { Label } from './Label';
import { FormField } from './FormField';
import { theme } from '@/theme/index';

import type { UseControllerProps } from 'react-hook-form';

import type {
  FormControlProps,
  FormLabelProps,
  InputProps
} from '@chakra-ui/react';

type TextFieldProps = {
  name: string;
  onBlurField?: React.FocusEventHandler<HTMLInputElement>;
  onChangeField?: React.ChangeEventHandler<HTMLInputElement>;
  onFocusField?: React.FocusEventHandler<HTMLInputElement>;
  onKeyUpField?: React.KeyboardEventHandler<HTMLInputElement>;
  labelText: string;
  type: 'text' | 'email' | 'url' | 'search' | 'password';
} & InputProps &
  FormLabelProps &
  FormControlProps &
  UseControllerProps;

export function TextField({
  id,
  control,
  defaultValue,
  labelText,
  name,
  onBlurField,
  onChangeField,
  placeholder,
  rules,
  type
}: TextFieldProps): React.ReactElement {
  const {
    field: {
      ref,
      name: fieldName,
      value = '',
      onChange,
      onBlur,
      ...fieldProps
    },
    formState
  } = useController({
    name,
    control,
    rules,
    defaultValue: defaultValue
  });

  // * NOTE: formState.isValid runs infinitely for some reason,
  // * running check on errors object instead as workaround
  const isValid = isEmpty(formState.errors);

  const onChangeTextField = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!!onChangeField) {
      onChangeField(e);
    }

    onChange(e);
  };

  const onBlurTextField = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!!onBlurField) {
      onBlurField(e);
    }

    onBlur();
  };

  return (
    <FormField id={id} mb="16px" isInvalid={!isValid}>
      <Label>
        {labelText}

        <Input
          id={id}
          ref={ref}
          className="text-input"
          type={type}
          placeholder={placeholder}
          name={fieldName}
          value={value}
          onChange={onChangeTextField}
          onBlur={onBlurTextField}
          {...fieldProps}
        />

        <ErrorMessage
          errors={formState.errors ?? formState.errors}
          name={name}
          render={({ message }) => (
            <FieldErrorMessage>{message}</FieldErrorMessage>
          )}
        />
      </Label>
    </FormField>
  );
}

const FieldErrorMessage = styled(FormHelperText)`
  font-size: 0.63rem;
  text-transform: capitalize;
  color: ${theme.colors.orange['100']};
`;
