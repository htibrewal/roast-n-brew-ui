import { Box, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';
import { HeadingCardI } from '../../interfaces/heading-card-interface';

const SharingWith = ({ title, description }: HeadingCardI) => {
  const options = [
    '#Dev',
    '#Docs',
    '#Sales',
    '@Srishti Sharma',
    '@Jayesh Asrani',
    '@Shiv Santosh',
    '@Akhil Krishnan',
    '@Harsh Tibrewal',
  ]

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

      <Autocomplete
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Select Name'
            placeholder='Select Name'
            variant='outlined'
          />
        )}
      />
    </div>
  )
}

export default SharingWith;