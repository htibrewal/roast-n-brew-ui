import { TextField } from '@material-ui/core';
import React from 'react';

interface TextInputI {
  label: string;
  placeholder?: string;
  helperText?: string;
}

export default function TextInput({ label, placeholder, helperText }: TextInputI) {
  return (
    <div className='text-field-wrapper'>
      <TextField
        label={label}
        placeholder={placeholder ? placeholder : label}
        fullWidth
        variant='outlined'
        helperText={helperText && true}
      />
    </div>
  )
}