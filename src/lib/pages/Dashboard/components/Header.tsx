import { Box, Flex, Stack, Heading, Text, Image } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import React from 'react';

import {
  HandIcon,
  NotificationIcon,
  SettingsIcon,
  CopyIcon,
} from '~/lib/components/Icons';

const IconContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      w="50px"
      h="50px"
      borderRadius="50%"
      bg="text.500"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};

const Header = () => {
  return (
    <Box w="100%" h="auto" borderRadius="8px" bg="bg.200" p="5">
      <Flex justifyContent="space-between" alignItems="center" w="100%">
        <Box>
          <Stack spacing={2} color="text.500">
            <Text>Good Morning, Livewell.</Text>
            <Flex alignItems="center" gap="8px">
              <Heading fontSize={24} fontWeight={700}>
                Welcome
              </Heading>
              <HandIcon />
            </Flex>
          </Stack>
        </Box>
        <Box>
          <Flex alignItems="center" gap="30px">
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
            <Box>
              <Flex gap="5px">
                <Image src="/assets/home-icon.svg" />
                <Box>
                  <Stack spacing={1} color="text.500">
                    <Text fontSize={14}>Livewell Ventures ltd</Text>
                    <Flex alignItems="center" gap="5px">
                      <Text fontSize={10}>Chit ID: Chit10978</Text>
                      <CopyIcon />
                    </Flex>
                  </Stack>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
