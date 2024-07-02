'use client';

import { Box, Image, Flex, Text, Stack, Heading, Button, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import React, { useState, useEffect } from 'react';

import {
 DashboardFilledIcon, DashboardOutlineIcon,
 PaymentFilledIcon, PaymentOutlineIcon,
 TransactionFilledIcon, TransactionOutlineIcon,
  AccountFilledIcon, AccountOutlineIcon,
} from '~/lib/components/Icons';
import type { SideNavLinkProps } from '~/lib/utilities/schema';

const SideNavLink = ({ text, icon, link, activeIcon }: SideNavLinkProps) => {
  const pathname = usePathname();
  const cookies = useCookies();
  useEffect(() => {
    if (link.includes('signin')) {
      cookies.remove('token');
    }
  }, [link, cookies])
  return (
    <Link href={link}>
      <Box
        w="100%"
        mx="auto"
        py="16px"
        px="32px"
        _hover={{ bg: 'brand.600'}}
        color='text.500'
        bg={pathname === link ? 'brand.600' : 'none'}
        cursor="pointer"
        borderRight={pathname === link ? '6px solid' : 'none'}
        borderColor={pathname === link ? 'text.300' : 'none'}
      >
        <Flex alignItems="center" gap="15px">

          <Icon as={pathname === link ? activeIcon : icon} />
          <Text>{text}</Text>
        </Flex>
      </Box>
    </Link>
  );
};

const UserSideNav = () => {
  const navLinks = [
    {
      title: 'Dashboard',
      icon: DashboardOutlineIcon,
      icon2: DashboardFilledIcon
    },
    {
      title: 'Payment',
      icon: PaymentOutlineIcon,
      icon2: PaymentFilledIcon
    },
    {
      title: 'Transactions',
      icon: TransactionOutlineIcon,
      icon2: TransactionFilledIcon
    },
    {
      title: 'Account',
      icon: AccountOutlineIcon,
      icon2: AccountFilledIcon
    },
  ];
  return (
    <Box 
      py='15px'
      w="20%"
      position="fixed"
      h='100%'
      zIndex="1"
      top="0"
      left="0"
      overflow="hidden"
      bg="text.500"
      px='15px'
    >
    <Box
      h="100%"
      overflow="hidden"
      bg="brand.700"
      py="30px"
      w='100%'
      borderRadius='40px'
    >
      <Stack h="100%" justifyContent="space-between">
        <Box>
          <Box px="24px" mb="30px">
            <Image
              src="https://ucarecdn.com/7c5701a6-45eb-4676-8d21-8dcda5c0c5c7/ChitLogo.png"
              alt="Chit Logo"
              w='150px'
              h='50px'
              mx='auto'
              objectFit='contain'
            />
          </Box>

          <Box>
            <Stack spacing="10px">
              <SideNavLink
                text="Dashboard"
                icon={DashboardOutlineIcon}
                activeIcon={DashboardFilledIcon}
                link="/user"
              />

              <SideNavLink
                text="Payment"
                icon={PaymentOutlineIcon}
                activeIcon={PaymentFilledIcon}
                link="/user/payment"
              />

              <SideNavLink
                text="Transaction"
                icon={TransactionOutlineIcon}
                activeIcon={TransactionFilledIcon}
                link="/user/transactions"
              />

              <SideNavLink
                text="Account"
                icon={AccountOutlineIcon}
                activeIcon={AccountFilledIcon}
                link="/user/account"
              />
            </Stack>
          </Box>
        </Box>

        <Box w='75%' mx='auto' h='auto' bg='brand.200'
          display='flex'
          alignItems='center'
          justifyContent='center'
          borderRadius='24px'
          py='20px'
          boxShadow='md'
        >
          <Stack>
              <Image src='/assets/images/report.png' mx='auto' w='60px' h='60px' objectFit='cover' />
              <Heading textAlign='center' m='0' p='0' fontSize={14}>Annual Report</Heading>
              <Text textAlign='center' fontSize={14}>Track your CHIT</Text>
              <Button borderRadius='8px' border='2px solid' borderColor='text.500' bg='brand.primary' color='text.500' fontSize={14} fontWeight={500}>Download</Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
    </Box>
  );
};

export default UserSideNav;
