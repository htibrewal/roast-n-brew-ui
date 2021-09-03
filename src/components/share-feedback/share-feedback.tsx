import { Box, FormGroup } from '@material-ui/core';
import React from 'react';
import Button from '../button/button';
import HeadingCard from '../heading-card/heading-card';
import AnythingElse from './anything-else';
import CoreValuesCheckbox from './core-values-checkbox';
import SharingWith from './sharing-with';
import SwitchLabel from '../switch/switch';
import StartDoing from './start-doing';

const ShareFeedback = () => {
  return (
    <>
      <HeadingCard
        title='Share feedback for your colleague or team'
        description='You can give feedback to anyone on your team. Be it your teammate or another team or even the management.'
      />

      <Box mb={4}>
        <FormGroup row>
          <SwitchLabel
            label='Share anonymously'
            description="Don't reveal your identity anywhere"
          />

          <SwitchLabel
            label='Share publicly'
            description='Share this message in a public channel'
          />
        </FormGroup>
      </Box>

      <SharingWith
        title='Whom do you want to talk about?'
        description='Select the person/team name that you want to share feedback'
      />

      <StartDoing />

      <AnythingElse
        title='Anything else?'
        description='Do you want to add anything extra?'
      />

      <CoreValuesCheckbox />

      <Box mt={2} mb={5} ml='auto' mr='auto'>
        <Button text='Send Feedback' />
      </Box>
    </>
  )
}

export default ShareFeedback;