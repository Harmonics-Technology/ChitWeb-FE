import { Box } from '@chakra-ui/react';
import React from 'react';

import type { SideNavProps } from '~/lib/utilities/schema';

import BankTopUp from './BankTopUp';
import RequestFromOthers from './RequestFromOthers';
import TopUpWithCard from './TopUpWithCard';

const index = ({ navPosition, setNavPosition }: SideNavProps) => {
  return (
    <Box w="447px" bg="brand.100" borderRadius="12px" px="10" py="16">
      {navPosition === 0 && <BankTopUp />}
      {navPosition === 1 && <TopUpWithCard />}
      {navPosition === 2 && <RequestFromOthers />}
    </Box>
  );
};

export default index;
