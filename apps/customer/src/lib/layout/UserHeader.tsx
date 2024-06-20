import { Box, Flex, Stack, Heading, Text, Image } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import React from 'react';

import {
  // HandIcon,
  NotificationIcon,
  SettingsIcon,
  CopyIcon,
} from '~/lib/components/Icons';

const IconContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
    >
      {children}
    </Box>
  );
};

const UserHeader = () => {
  return (
    <Box w="100%" h="auto" mb='48px'>
      <Flex justifyContent="space-between" alignItems="center" w="100%">
        <Box>
          <Stack spacing={1} color="text.200">
            <Text>Good Morning.</Text>
            <Flex alignItems="center" gap="8px">
              <Heading fontSize={24} fontWeight={700}>
                Welcome Back
              </Heading>
              {/* <HandIcon /> */}
            </Flex>
          </Stack>
        </Box>
        <Box>
          <Flex alignItems="center" gap="16px">
            <IconContainer>
              <NotificationIcon />
            </IconContainer>
            <IconContainer>
              <SettingsIcon />
            </IconContainer>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default UserHeader;
