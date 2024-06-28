import { Box } from '@chakra-ui/react';
import React from 'react';

import type { SideNavProps } from '~/lib/utilities/schema';

import FindVendorsFlow from './FindVendorsFlow';
import PayWithRefIdFlow from './PayWithRefIdFlow';

const index = ({ navPosition, setNavPosition }: SideNavProps) => {
  return (
    <Box
      w="447px"
      bg="rgba(235, 231, 253, 0.3)"
      borderRadius="12px"
      px="10"
      py="16"
      minH="440px"
    >
      {navPosition === 0 && <PayWithRefIdFlow />}
      {navPosition === 1 && <FindVendorsFlow />}
    </Box>
  );
};

export default index;
