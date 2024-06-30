import {
  Button,
  Flex,
  Image,
  Stack,
  Text,
  Tr,
  Td,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

import { OptionsIcon } from '~/lib/components/Icons';
import type {
  TransactionListItemProps,
  InvoiceListItemProps,
} from '~/lib/utilities/schema';

export const TransactionListItem = ({
  image,
  transactionAmount,
  transactionDate,
  transactionId,
  transactionStatus,
  transactionTime,
  transactionTitle,
  transactionType,
  action,
}: TransactionListItemProps) => {
  return (
    <Tr bg="actions.700" borderRadius="16px" style={{ borderRadius: '16px' }}>
      <Td color="border.900">
        <Flex alignItems="center" gap="8px">
          <Image src={image} w="30px" h="30px" objectFit="cover" />
          <Text fontWeight={600} fontSize={13}>
            {transactionTitle}
          </Text>
        </Flex>
      </Td>
      <Td color="status.100" fontWeight={500} fontSize={14}>
        {transactionType}
      </Td>
      <Td fontSize={13} color="border.200" fontWeight={500}>
        {transactionId}
      </Td>
      <Td>
        <Text
          w="auto"
          fontSize={13}
          textAlign="center"
          borderRadius="4px"
          py="2"
          px='1'
          bg="actions.800"
          color="actions.900"
          fontWeight={500}
        >
          {transactionStatus}
        </Text>
      </Td>
      <Td>
        <Stack color="border.200" spacing="1px">
          <Text fontSize={13} fontWeight={500}>
            {transactionDate}
          </Text>
          <Text fontSize={11} fontWeight={500}>
            {transactionTime}
          </Text>
        </Stack>
      </Td>
      <Td
        color="brand.900"
        bg="brand.100"
        textAlign="center"
        fontSize={13}
        fontWeight={500}
      >
        {transactionAmount}
      </Td>
      <Td>
        <Button bg="none" onClick={action}>
          <OptionsIcon />
        </Button>
      </Td>
    </Tr>
  );
};

export const InvoiceListItem = ({
  image,
  transactionAmount,
  transactionDate,
  transactionId,
  transactionStatus,
  transactionTime,
  transactionTitle,
  action,
}: InvoiceListItemProps) => {
  return (
    <Tr bg="actions.700" borderRadius="16px" style={{ borderRadius: '12px' }}>
      <Td color="border.900">
        <Flex alignItems="center" gap="8px">
          <Image src={image} w="50px" h="50px" objectFit="cover" />
          <Text fontWeight={600} fontSize={14}>
            {transactionTitle}
          </Text>
        </Flex>
      </Td>
      <Td fontSize={14} color="border.200" fontWeight={500}>
        {transactionId}
      </Td>
      <Td>
        <Text
          w="auto"
          fontSize={14}
          textAlign="center"
          borderRadius="4px"
          p="2"
          bg="brand.100"
          color="brand.primary"
          fontWeight={600}
        >
          {transactionStatus}
        </Text>
      </Td>
      <Td>
        <Text fontSize={14} color="border.200" fontWeight={500}>
          {transactionDate}
        </Text>
      </Td>
      <Td>
        <Text fontSize={14} fontWeight={500} color="border.200">
          {transactionTime}
        </Text>
      </Td>
      <Td
        color="brand.900"
        bg="brand.100"
        textAlign="center"
        fontSize={14}
        fontWeight={500}
      >
        {transactionAmount}
      </Td>
      <Td>
        <Menu>
          <MenuButton as="button">
            <OptionsIcon />
          </MenuButton>
          <MenuList>
            <MenuItem
              mt="2"
              fontWeight={600}
              bg="options.200"
              py="4"
              textAlign="center"
              w="90%"
              mx="auto"
              borderRadius="5px"
              mb="3"
              color="options.100"
            >
              View Invoice
            </MenuItem>
            <MenuItem
              fontWeight={600}
              bg="options.400"
              py="4"
              textAlign="center"
              w="90%"
              mx="auto"
              borderRadius="5px"
              mb="3"
              color="options.300"
            >
              Edit
            </MenuItem>
            <MenuItem
              fontWeight={600}
              bg="options.600"
              py="4"
              textAlign="center"
              w="90%"
              mx="auto"
              borderRadius="5px"
              mb="3"
              color="options.500"
            >
              Delete
            </MenuItem>
          </MenuList>
        </Menu>
        {/* <Button bg='none' onClick={action}></Button> */}
      </Td>
    </Tr>
  );
};

export const RequestFundItem = ({
  image,
  transactionAmount,
  transactionDate,
  transactionId,
  transactionStatus,
  transactionTime,
  transactionTitle,
  action,
}: InvoiceListItemProps) => {
  return (
    <Tr bg="actions.700" borderRadius="16px" style={{ borderRadius: '12px' }}>
      <Td color="border.900">
        <Flex alignItems="center" gap="8px">
          <Image src={image} w="30px" h="30px" objectFit="cover" />
          <Text fontWeight={600} fontSize={13}>
            {transactionTitle}
          </Text>
        </Flex>
      </Td>
      <Td fontSize={13} color="border.200" fontWeight={500}>
        {transactionId}
      </Td>
      <Td>
        <Text
          w="auto"
          fontSize={13}
          textAlign="center"
          borderRadius="4px"
          p="2"
          bg="actions.800"
          color="actions.900"
          fontWeight={500}
        >
          {transactionStatus}
        </Text>
      </Td>
      <Td>
        <Text fontSize={13} color="border.200" fontWeight={500}>
          {transactionDate}
        </Text>
      </Td>
      <Td>
        <Text fontSize={13} fontWeight={500} color="border.200">
          {transactionTime}
        </Text>
      </Td>
      <Td
        color="brand.900"
        bg="brand.100"
        textAlign="center"
        fontSize={13}
        fontWeight={500}
      >
        {transactionAmount}
      </Td>
      <Td>
        <Menu>
          <MenuButton as="button">
            <OptionsIcon />
          </MenuButton>
          <MenuList>
            <MenuItem
              mt="2"
              fontWeight={600}
              bg="options.200"
              py="4"
              textAlign="center"
              w="90%"
              mx="auto"
              borderRadius="5px"
              mb="3"
              color="options.100"
              fontSize={14}
            >
              View Request
            </MenuItem>
            <MenuItem
              fontWeight={600}
              bg="options.400"
              py="4"
              textAlign="center"
              w="90%"
              mx="auto"
              borderRadius="5px"
              mb="3"
              color="options.300"
              fontSize={14}
            >
              Accept Request
            </MenuItem>
            <MenuItem
              fontWeight={600}
              bg="options.600"
              py="4"
              textAlign="center"
              w="90%"
              mx="auto"
              borderRadius="5px"
              mb="3"
              color="options.500"
              fontSize={14}
            >
              Decline Request
            </MenuItem>
          </MenuList>
        </Menu>
        {/* <Button bg='none' onClick={action}></Button> */}
      </Td>
    </Tr>
  );
};
