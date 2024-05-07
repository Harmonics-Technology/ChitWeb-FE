import { Box, Heading, FormLabel, Stack, Input } from '@chakra-ui/react';
import React from 'react';

import { ButtonComponent } from '~/lib/components/Button';

const TwoFA = () => {
  return (
    <Box>
      <Stack spacing="32px">
        <Heading fontSize={24}>2FA</Heading>
        <Box>
          <Stack spacing="24px">
            <Box>
              <FormLabel>Create 2FA Pin</FormLabel>
              <Input
                py="6"
                type="password"
                placeholder="create a 6-digit 2FA pin"
                bg="text.500"
              />
            </Box>
            <Box>
              <FormLabel>Security Question</FormLabel>
              <Input
                py="6"
                type="text"
                placeholder="Enter security question"
                bg="text.500"
              />
            </Box>
            <Box>
              <FormLabel>Security Question Answer</FormLabel>
              <Input
                py="6"
                type="password"
                placeholder="Answer to security question"
                bg="text.500"
              />
            </Box>
            <Box>
              <FormLabel>Password</FormLabel>
              <Input
                py="6"
                type="password"
                placeholder="Enter password"
                bg="text.500"
              />
            </Box>
          </Stack>
        </Box>
        <ButtonComponent
          text="Activate 2FA"
          color="text.500"
          bg="bg.200"
          width="100%"
          onClick={() => {}}
        />
      </Stack>
    </Box>
  );
};

export default TwoFA;
