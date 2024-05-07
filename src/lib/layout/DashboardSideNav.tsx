'use client';

import { Box, Image, Flex, Text, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import {
  DashboardIcon,
  PaymentIcon,
  TransactionIcon,
  AccountIcon,
  ReferralIcon,
  LogoutIcon,
} from '~/lib/components/Icons';
import type { SideNavLinkProps } from '~/lib/utilities/schema';

const SideNavLink = ({ text, Icon, link }: SideNavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link href={link}>
      <Box
        w="218px"
        mx="auto"
        py="16px"
        px="32px"
        _hover={{ bg: 'text.500', color: 'bg.200' }}
        color={pathname.includes(link) ? 'bg.200' : 'bg.500'}
        borderRadius="8px"
        bg={pathname.includes(link) ? 'text.500' : 'none'}
        cursor="pointer"
      >
        <Flex alignItems="center" gap="10px">
          <Icon isActive={!!pathname.includes(link)} />
          <Text>{text}</Text>
        </Flex>
      </Box>
    </Link>
  );
};

const DashboardSideNav = () => {
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
            <Stack spacing="18px">
              <SideNavLink
                text="Dashboard"
                Icon={DashboardIcon}
                link="/user/dashboard"
              />

              <SideNavLink
                text="Payment"
                Icon={PaymentIcon}
                link="/user/payment"
              />

              <SideNavLink
                text="Transaction"
                Icon={TransactionIcon}
                link="/user/transaction"
              />

              <SideNavLink
                text="Account"
                Icon={AccountIcon}
                link="/user/account"
              />
            </Stack>
          </Box>
        </Box>

        <Box>
          <Stack spacing="18px">
            <SideNavLink
              text="Referrals"
              Icon={ReferralIcon}
              link="/user/referrals"
            />

            <SideNavLink text="Logout" Icon={LogoutIcon} link="/user/logout" />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default DashboardSideNav;
