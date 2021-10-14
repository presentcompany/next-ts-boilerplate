import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { TextField } from '@/components/common/index';

type SearchFormData = {
  search: string;
};

export default function Searchbar() {
  const form = useForm({
    mode: 'all'
  });

  const onSubmit = async (data: SearchFormData): Promise<void> => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
        <TextField
          id="searchbar"
          name="searchbar"
          type="search"
          labelText="Search"
          control={form.control}
        />
      </form>
    </FormProvider>
  );
}
