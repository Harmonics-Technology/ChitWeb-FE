'use client';

import {
  Box,
  ListItem,
  List,
  Image,
  VStack,
  Flex,
  Text,
  Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import {
  DashboardIcon,
  PaymentIcon,
  TransactionIcon,
  AccountIcon,
  ReferralIcon,
  LogoutIcon,
} from '~/lib/components/Icons';
import type { SideNavLinkProps, SideNavProps } from '~/lib/utilities/schema';

const SideNavLink = ({ text, isActive, Icon, onClick }: SideNavLinkProps) => {
  return (
    <Box
      w="218px"
      mx="auto"
      py="16px"
      px="32px"
      _hover={{ bg: 'text.500', color: 'bg.200' }}
      color={isActive ? 'bg.200' : 'bg.500'}
      borderRadius="8px"
      bg={isActive ? 'text.500' : 'none'}
      onClick={onClick}
      cursor="pointer"
    >
      <Flex alignItems="center" gap="10px">
        <Icon isActive={isActive} />
        <Text>{text}</Text>
      </Flex>
    </Box>
  );
};

const SideNav = ({ navPosition, setNavPosition }: SideNavProps) => {
  const navLinks = [
    {
      title: 'Dashboard',
      icon: DashboardIcon,
    },
    {
      title: 'Payment',
      icon: PaymentIcon,
    },
    {
      title: 'Transaction',
      icon: TransactionIcon,
    },
    {
      title: 'Account',
      icon: AccountIcon,
    },
    {
      title: 'Referrals',
      icon: ReferralIcon,
    },
    {
      title: 'Logout',
      icon: LogoutIcon,
    },
  ];

  const handleClick = (index: number) => {
    setNavPosition(index);
  };

  return (
    <Box
      h="100%"
      w="18%"
      position="fixed"
      zIndex="1"
      top="0"
      left="0"
      overflow="hidden"
      bg="bg.200"
      pt="40px"
      pb="51px"
    >
      <Stack h="100%" justifyContent="space-between">
        <Box>
          <Box px="24px" mb="56px">
            <Image
              src="https://ucarecdn.com/7c5701a6-45eb-4676-8d21-8dcda5c0c5c7/ChitLogo.png"
              alt="Chit Logo"
            />
          </Box>
          <Box>
            <Stack spacing="12px">
              {navLinks.slice(0, 4).map((item, index) => (
                <SideNavLink
                  key={index}
                  text={item.title}
                  Icon={item.icon}
                  isActive={index === navPosition}
                  onClick={() => handleClick(index)}
                />
              ))}
            </Stack>
          </Box>
        </Box>

        <Box>
          <Stack spacing="12px">
            {navLinks.slice(4, 6).map((item, index) => (
              <SideNavLink
                key={index}
                text={item.title}
                Icon={item.icon}
                isActive={index === navPosition}
                onClick={() => handleClick(index)}
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default SideNav;
