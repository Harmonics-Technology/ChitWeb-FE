import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Stack,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';

import { OutlineButtonComponent } from '~/lib/components/Button';
import { VirtualCard } from '~/lib/components/Cards';
import {
  SettingsIcon,
  PrevIcon,
  NextIcon,
  MoneyIcon,
} from '~/lib/components/Icons';

const SingleRequest = () => {
  return (
    <Box>
      <Stack spacing="24px" mb="38px">
        <Box>
          <Flex alignItems="center" gap="10px">
            <MoneyIcon />
            <Heading fontSize={16} fontWeight={700}>
              100, 000.00
            </Heading>
          </Flex>
        </Box>
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Flex alignItems="center" gap="8px">
                <Avatar size="sm" />
                <Stack spacing="4px" color="border.200" fontWeight={500}>
                  <Text fontSize={13}>Kubrah Alawiye</Text>
                  <Text fontSize={13}>
                    Chit ID:{' '}
                    <Box as="span" fontWeight={700} color="text.200">
                      Chit10978
                    </Box>
                  </Text>
                </Stack>
              </Flex>
            </Box>
            <Box color="border.200" fontWeight={500}>
              <Text fontSize={11}>10:00 AM</Text>
              <Text fontSize={13}>01 Apr 2023</Text>
            </Box>
          </Flex>
        </Box>
      </Stack>
      <Box>
        <Flex alignItems="center" gap="16px">
          <OutlineButtonComponent
            text="Decline"
            color="status.400"
            width="120px"
            onClick={() => {}}
          />
          <OutlineButtonComponent
            text="Accept"
            color="status.500"
            width="120px"
            onClick={() => {}}
          />
        </Flex>
      </Box>
    </Box>
  );
};

const Requests = () => {
  return (
    <Box
      as="section"
      w="40%"
      minH="300px"
      boxShadow="lg"
      borderRadius="12px"
      py="5"
      px="3"
      bg="text.500"
    >
      <Box mb="25px">
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" gap="8px">
            <Heading color="text.200" fontSize={18} fontWeight={600}>
              Requests
            </Heading>
            <Box bg="brand.primary" px="3" py="0.3" borderRadius="20px">
              <Text color="text.500" fontSize={13}>
                5
              </Text>
            </Box>
          </Flex>
          <Box>
            <Flex alignItems="center">
              <Button bg="none" p="0" _hover={{ bg: 'none' }}>
                <PrevIcon isActive={false} />
              </Button>
              <Button bg="none" p="0" _hover={{ bg: 'none' }}>
                <NextIcon isActive />
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box>
        <SingleRequest />
      </Box>
    </Box>
  );
};

const VirtualCards = () => {
  return (
    <Box
      as="section"
      w="60%"
      minH="300px"
      boxShadow="lg"
      borderRadius="12px"
      p="5"
      bg="text.500"
    >
      <Box mb="24px">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading color="text.200" fontSize={24} fontWeight={700}>
            My Cards
          </Heading>
          <SettingsIcon />
        </Flex>
      </Box>
      <VirtualCard />
    </Box>
  );
};

const Cards = () => {
  return (
    <Box w="100%">
      <Flex gap="20px">
        <VirtualCards />
        <Requests />
      </Flex>
    </Box>
  );
};

export default Cards;
