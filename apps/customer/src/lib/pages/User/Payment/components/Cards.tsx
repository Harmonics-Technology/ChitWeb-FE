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
  MoneyIcon, SettingsIconOutline
} from '~/lib/components/Icons';


const VirtualCards = () => {
  return (
    <Box
      as="section"
      w="100%"
      minH="300px"
      border='2px solid'
      borderColor='brand.100'
      borderRadius="40px"
      p="5"
      bg="text.500"
    >
      <Box mb="24px">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading color="text.200" fontSize={23} fontWeight={700}>
            My Cards
          </Heading>
          <SettingsIconOutline />
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
      </Flex>
    </Box>
  );
};

export default Cards;