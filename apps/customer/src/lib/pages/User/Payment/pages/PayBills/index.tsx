'use client';

import { Box, Stack, Flex } from '@chakra-ui/react';
import React from 'react';

import { BackButton } from '~/lib/components/Button';

import BillItemButton from './Components/BillItemButton';

const Index = () => {
  const bills = [
    {
      name: 'Electricity',
      icon: '/assets/svgs/electricity.svg',
      link: '/user/payment/pay-bills/electricity',
    },
    {
      name: 'TV and Cable Subscription',
      icon: '/assets/svgs/cable-tv.svg',
      link: '/user/payment/pay-bills/cable-subscription',
    },
    {
      name: 'Airtime and Data',
      icon: '/assets/svgs/internet.svg',
      link: '/user/payment/pay-bills/internet',
    },
    {
      name: 'Shopping',
      icon: '/assets/svgs/shopping.svg',
      link: '/user/payment/shopping',
    },
    {
      name: 'School and Exam',
      icon: '/assets/svgs/exam.svg',
      link: '/user/payment/exam-subscription',
    },
    {
      name: 'Sport Betting',
      icon: '/assets/svgs/betting.svg',
      link: '/user/payment/sport-betting',
    },
    {
      name: 'Event Ticket',
      icon: '/assets/svgs/event-ticket.svg',
      link: '/user/payment/event-ticket',
    },
  ];
  return (
    <Box borderRadius="8px" boxShadow="lg" p="6" minH="600px">
      <Stack spacing="64px">
        <BackButton title="Pay Bills" link="/user/payment" />
        <Box>
          <Flex alignItems="center" gap="24px" flexWrap="wrap">
            {bills.map((bill, index) => (
              <BillItemButton
                label={bill.name}
                image={bill.icon}
                link={bill.link}
              />
            ))}
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default Index;
