import { Box, FormGroup } from '@material-ui/core';
import React from 'react';
import Button from '../button/button';
import HeadingCard from '../heading-card/heading-card';
import AnythingElse from '../share-feedback/anything-else';
import SharingWith from '../share-feedback/sharing-with';

const RequestFeedback = () => {
  return (
    <>
      <HeadingCard
        title='Request your colleagues to share feedback'
        description='You can give feedback to anyone on your team. Be it your teammate or another team or even the management.'
      />

      <SharingWith
        title='Whom do you want to give your feedback?'
        description='Select the person/team name that you want to ask for feedback'
      />

      <AnythingElse
        title='What is this for?'
        description='Please provide some context'
      />

      <Box mt={2} mb={5} ml='auto' mr='auto'>
        <Button text='Request Feedback' />
      </Box>
    </>
  )
}

export default RequestFeedback;