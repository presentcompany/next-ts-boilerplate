import React from 'react';
import { useSetRecoilState } from 'recoil';
import { FormProvider, useForm } from 'react-hook-form';

import { searchbarQueryState } from '@/state/searchBar/atoms';
import { LabeledTextField } from '@/components/common/index';

export function Searchbar(): JSX.Element {
  const setSearchQuery = useSetRecoilState(searchbarQueryState);

  const form = useForm({
    mode: 'all'
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <FormProvider {...form}>
      <form noValidate>
        <LabeledTextField
          id="searchbar"
          name="searchbar"
          type="search"
          labelText="Search"
          onChange={
            onChange as
              | (React.ChangeEventHandler<HTMLInputElement> &
                  React.FormEventHandler<HTMLLabelElement> &
                  React.FormEventHandler<HTMLDivElement> &
                  ((event: any) => void))
              | undefined
          }
        />
      </form>
    </FormProvider>
  );
}
