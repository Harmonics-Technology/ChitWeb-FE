import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import { ButtonComponent } from '~/lib/components/Button';
import type { SideNavProps } from '~/lib/utilities/schema';

const Navigation = ({ navPosition, setNavPosition }: SideNavProps) => {
  return (
    <Box
      px="14px"
      py='8px'
      borderRadius="16px"
      border="2px solid"
      borderColor="brand.300"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <ButtonComponent
          text="Profile"
          width="138px"
          bg={navPosition === 1 ? 'brand.100' : 'none'}
          color={navPosition === 1 ? 'brand.primary' : 'text.200'}
          onClick={() => setNavPosition(1)}
        />
        <ButtonComponent
          text="Support"
          width="138px"
          bg={navPosition === 2 ? 'brand.100' : 'none'}
          color={navPosition === 2 ? 'brand.primary' : 'text.200'}
          onClick={() => setNavPosition(2)}
        />
        <ButtonComponent
          text="Security"
          width="138px"
          bg={navPosition === 3 ? 'brand.100' : 'none'}
          color={navPosition === 3 ? 'brand.primary' : 'text.200'}
          onClick={() => setNavPosition(3)}
        />
      </Flex>
    </Box>
  );
};

export default Navigation;
