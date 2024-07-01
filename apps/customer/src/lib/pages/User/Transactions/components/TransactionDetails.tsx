'use client';

import {
  Box,
  Heading,
  Text,
  VStack,
  Flex,
  Stack,
  Button,
} from '@chakra-ui/react';
import React from 'react';

import { IconButtonComponent } from '~/lib/components/Button';
import {
  ChevronIcon,
  DownloadIcon,
  GreyCopyIcon,
} from '~/lib/components/Icons';
import type { TransactionDetailsProps } from '~/lib/utilities/schema';

const TransactionDetails = ({
  transactionTitle,
  transactionType,
  transactionAmount,
  transactionDate,
  transactionId,
  transactionSource,
  transactionStatus,
  downloadReceipt,
  shareReceipt,
}: TransactionDetailsProps) => {
  return (
    <Box>
      <Heading mb="20px" fontSize={27} fontWeight={700} color="text.200">
        Transaction Details
      </Heading>
      <VStack spacing="15px" mb="20px">
        <Heading fontWeight={600} color="text.200" fontSize={20}>
          Cousera
        </Heading>
        <Box borderRadius="8px" px="3" py="2" bg="brand.100">
          <Text color="brand.primary" fontSize={15} fontWeight={600}>
            Transaction Status: Successful
          </Text>
        </Box>
        <Box>
          <Flex alignItems="flex-end" gap="4px">
            <Heading fontSize={30} fontWeight={700}>$9.15</Heading>
            <Text fontSize={15} fontWeight={600}>USD</Text>
          </Flex>
        </Box>
      </VStack>
      <Stack spacing="6px" mb="20px">
        <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontWeight={500} color="border.200">
              Transaction Type
            </Text>
            <Text fontWeight={600} color="text.200">
              Sent
            </Text>
          </Flex>
        </Box>
        <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontWeight={500} color="border.200">
              Transaction Source
            </Text>
            <Text fontWeight={600} color="text.200">
              Wallet
            </Text>
          </Flex>
        </Box>
        <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontWeight={500} color="border.200">
              Transaction ID
            </Text>
            <Box>
              <Flex alignItems="center" gap="5px">
                <Text color="text.200" fontWeight={600}>
                  678267AD
                </Text>
                <Button bg="none" p="0" _hover={{ bg: 'none' }}>
                  <GreyCopyIcon />
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box borderBottom="1px solid" borderColor="brand.100" py="3" px="2">
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontWeight={500} color="border.200">
              Transaction Date
            </Text>
            <Text fontWeight={600} color="text.200">
              June 8, 2023.
            </Text>
          </Flex>
        </Box>
      </Stack>

      <Stack spacing="10px">
        <IconButtonComponent
          text="Download Receipt"
          icon={DownloadIcon}
          flip
          onClick={() => {}}
          width="100%"
          color="text.500"
          bg="brand.primary"
        />
        <IconButtonComponent
          text="Share Receipt"
          icon={ChevronIcon}
          flip
          onClick={() => {}}
          width="100%"
          bg="text.500"
          color="brand.primary"
        />
      </Stack>
    </Box>
  );
};

export default TransactionDetails;
