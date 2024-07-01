import { Box, Button, Flex, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import type {
  BillItemButtonProps,
  BillerItemButtonProps,
} from '~/lib/utilities/schema';

const BillItemButton = ({ image, label, link }: BillItemButtonProps) => {
  return (
    <Link href={link}>
      <Button
        bg="none"
        borderRadius="12px"
        py="7"
        border="2px solid"
        borderColor="border.100"
      >
        <Flex alignItems="center" gap="12px">
          <Image src={image} w="40px" h="40px" objectFit="cover" />
          <Text color="text.200" fontSize={15}>
            {label}
          </Text>
        </Flex>
      </Button>
    </Link>
  );
};

export default BillItemButton;

export const BillerItemButton = ({
  image,
  label,
  onClick,
}: BillerItemButtonProps) => {
  return (
    <Box>
      <Button
        onClick={onClick}
        bg="none"
        border="1px solid"
        borderColor="border.100"
        borderRadius="4px"
        w="97px"
        h="70px"
        mb="7px"
      >
        <Image src={image} />
      </Button>
      <Text fontSize={14} fontWeight={600} textAlign="center">
        {label}
      </Text>
    </Box>
  );
};
