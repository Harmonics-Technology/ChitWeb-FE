import { Box } from '@chakra-ui/react';
import React from 'react';

import type { SideNavProps } from '~/lib/utilities/schema';

import BankTopUp from './BankTopUp';
import RequestFromOthers from './RequestFromOthers';
import TopUpWithCard from './TopUpWithCard';

const index = ({ navPosition, setNavPosition }: SideNavProps) => {
  return (
    <Box w="50%" bg="options.800" borderRadius="40px" px="7" py="16">
      {navPosition === 0 && <BankTopUp />}
      {navPosition === 1 && <TopUpWithCard />}
      {navPosition === 2 && <RequestFromOthers />}
    </Box>
  );
};

export default index;
