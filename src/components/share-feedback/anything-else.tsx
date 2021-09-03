import { Box } from '@material-ui/core';
import React from 'react';
import TextInput from '../text-input/text-input';

export default function AnythingElse() {
  return (
    <div className='sharing-with-wrapper'>
      <span>
        Anything else?
      </span>

      <Box mb={2.5} mt={1}>
        <span className='description-class'>
          Do you want to add anything extra?
        </span>
      </Box>

      <TextInput
        label='Collective feedback'
        helperText='You can talk about if anything you missed to mention'
      />
    </div>
  )
}