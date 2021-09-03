import { Box } from '@material-ui/core';
import React from 'react';
import { HeadingCardI } from '../../interfaces/heading-card-interface';
import TextInput from '../text-input/text-input';

export default function AnythingElse({ title, description }: HeadingCardI) {
  return (
    <div className='sharing-with-wrapper'>
      <span>
        { title }
      </span>

      <Box mb={2.5} mt={1}>
        <span className='description-class'>
          { description }
        </span>
      </Box>

      <TextInput
        label='Collective feedback'
        helperText='You can talk about if anything you missed to mention'
      />
    </div>
  )
}