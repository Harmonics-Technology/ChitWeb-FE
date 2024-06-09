import { Box, Stack, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const DataPrivacy = () => {
  const questions = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Box>
      <Stack spacing="55px">
        {questions.map((item) => {
          return (
            <Box key={item}>
              <Stack spacing="12px">
                <Heading fontSize={20} color="brand.primary" fontWeight={600}>
                  How secure is CHIT?
                </Heading>
                <Text fontSize={18} color="text.200">
                  CHIT prioritizes your security. We use advanced encryption,
                  multi-factor authentication, and regular security audits to
                  ensure your data and transactions are safeguarded. Your
                  privacy and security are our top priorities.
                </Text>
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default DataPrivacy;
