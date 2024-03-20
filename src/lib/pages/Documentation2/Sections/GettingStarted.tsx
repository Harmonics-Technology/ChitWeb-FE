import { Box, Stack, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const GettingStarted = () => {
  const questions = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Box>
      <Stack spacing="55px">
        {questions.map((item) => {
          return (
            <Box key={item}>
              <Stack spacing="12px">
                <Heading fontSize={20} color="brand.primary" fontWeight={600}>
                  How do I create a CHIT wallet?
                </Heading>
                <Text fontSize={18} color="text.200">
                  To create a CHIT wallet, simply download the CHIT app from the
                  App Store or Google Play. Follow the on-screen instructions to
                  sign up, providing your name, email, and creating a secure
                  password.
                </Text>
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default GettingStarted;
