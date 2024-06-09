import { Box, Heading, FormLabel, Stack, Input } from '@chakra-ui/react';
import React from 'react';

import { ButtonComponent } from '~/lib/components/Button';

const ChangePassword = () => {
  return (
    <Box>
      <Stack spacing="32px">
        <Heading fontSize={24}>ChangePassword</Heading>
        <Box>
          <Stack spacing="24px">
            <Box>
              <FormLabel>Old password</FormLabel>
              <Input
                py="6"
                type="password"
                placeholder="Enter old password"
                bg="text.500"
              />
            </Box>
            <Box>
              <FormLabel>New password</FormLabel>
              <Input
                type="password"
                py="6"
                placeholder="Enter new password"
                bg="text.500"
              />
            </Box>
            <Box>
              <FormLabel>Confirm password</FormLabel>
              <Input
                type="password"
                py="6"
                placeholder="Confirm your password"
                bg="text.500"
              />
            </Box>
          </Stack>
        </Box>
        <ButtonComponent
          text="Change Password"
          color="text.500"
          bg="bg.200"
          width="100%"
          onClick={() => {}}
        />
      </Stack>
    </Box>
  );
};

export default ChangePassword;
