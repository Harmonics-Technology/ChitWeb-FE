import { Box } from '@chakra-ui/react';
import React from 'react';

import type { SideNavProps } from '~/lib/utilities/schema';

import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';
import TransactionPin from './TransactionPin';
import TwoFA from './TwoFA';

const index = ({ navPosition, setNavPosition }: SideNavProps) => {
  return (
    <Box 
      p="10" 
      bg="actions.700" 
      w="100%" 
      borderRadius="12px"
    >
      {navPosition === 0 && <TransactionPin />}
      {navPosition === 1 && <ChangePassword />}
      {navPosition === 2 && <TwoFA />}
      {navPosition === 3 && <DeleteAccount />}
    </Box>
  );
};

export default index;
