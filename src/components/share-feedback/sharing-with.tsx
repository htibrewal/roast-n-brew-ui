import { Box, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';

const SharingWith = () => {
  return (
    <div className='sharing-with-wrapper'>
      <span>
        Whom do you want to talk about?
      </span>

      <Box mb={2.5} mt={1}>
        <span className='description-class'>
          Select the person / team name that you want to share feedback
        </span>
      </Box>

      <Autocomplete
        options={[]}
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