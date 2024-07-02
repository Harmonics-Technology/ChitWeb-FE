import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Stack,
  Text,
  Heading,
  Flex,
  Button,
  Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { OptionsIcon, TransactionTableIcon } from '~/lib/components/Icons';
import CustomModal from '~/lib/components/Modal';
import { TransactionListItem } from '~/lib/components/TransactionListItem';
import { TransactionListItemProps } from '~/lib/utilities/schema';

import TransactionDetails from './TransactionDetails';

const RecurringTransactionsList = () => {
  const [showTransactionDetailsModal, setShowTransactionDetailsModal] =
    useState<boolean>(false);

  const openTransactionDetailsModal = () => {
    setShowTransactionDetailsModal(true);
  };

  return (
    <Box>
      <TableContainer>
        <Table
          variant="unstyled"
          style={{ borderCollapse: 'separate', borderSpacing: '0 1em' }}
        >
          <Thead>
            <Tr>
              <Th>
                <Flex alignItems="center" gap="10px">
                  <Text
                    color="brand.primary"
                    fontWeight={700}
                    fontSize={12}
                    textTransform="uppercase"
                  >
                    Details
                  </Text>
                  <TransactionTableIcon />
                </Flex>
              </Th>

              <Th>
                <Flex alignItems="center" gap="10px">
                  <Text
                    color="brand.primary"
                    fontWeight={700}
                    fontSize={12}
                    textTransform="uppercase"
                  >
                    type
                  </Text>
                  <TransactionTableIcon />
                </Flex>
              </Th>

              <Th>
                <Flex alignItems="center" gap="10px">
                  <Text
                    color="brand.primary"
                    fontWeight={700}
                    fontSize={12}
                    textTransform="uppercase"
                  >
                    chit id
                  </Text>
                  <TransactionTableIcon />
                </Flex>
              </Th>

              <Th>
                <Flex alignItems="center" gap="10px">
                  <Text
                    color="brand.primary"
                    fontWeight={700}
                    fontSize={12}
                    textTransform="uppercase"
                  >
                    status
                  </Text>
                  <TransactionTableIcon />
                </Flex>
              </Th>

              <Th>
                <Flex alignItems="center" gap="10px">
                  <Text
                    color="brand.primary"
                    fontWeight={700}
                    fontSize={12}
                    textTransform="uppercase"
                  >
                    Date
                  </Text>
                  <TransactionTableIcon />
                </Flex>
              </Th>

              <Th>
                <Flex alignItems="center" gap="10px">
                  <Text
                    color="brand.primary"
                    fontWeight={700}
                    fontSize={12}
                    textTransform="uppercase"
                  >
                    amount
                  </Text>
                  <TransactionTableIcon />
                </Flex>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <TransactionListItem
              image="/assets/images/coursera.png"
              transactionTitle="Money Sent Withdrawal!"
              transactionAmount="20,000"
              transactionType="Debit"
              transactionDate="01 APR 2023"
              transactionTime="10:50AM"
              action={openTransactionDetailsModal}
              transactionId="CT123478898"
              transactionStatus="Success"
            />

            <TransactionListItem
              image="/assets/images/coursera.png"
              transactionTitle="Money Sent Withdrawal!"
              transactionAmount="20,000"
              transactionType="Debit"
              transactionDate="01 APR 2023"
              transactionTime="10:50AM"
              action={openTransactionDetailsModal}
              transactionId="CT123478898"
              transactionStatus="Success"
            />

            <TransactionListItem
              image="/assets/images/coursera.png"
              transactionTitle="Money Sent Withdrawal!"
              transactionAmount="20,000"
              transactionType="Debit"
              transactionDate="01 APR 2023"
              transactionTime="10:50AM"
              action={openTransactionDetailsModal}
              transactionId="CT123478898"
              transactionStatus="Success"
            />
          </Tbody>
        </Table>
      </TableContainer>
      <CustomModal
        isOpen={showTransactionDetailsModal}
        onClose={() => setShowTransactionDetailsModal(false)}
      >
        <TransactionDetails
          transactionTitle="Money Sent Withdrawal!"
          transactionAmount="20,000"
          transactionType="Sent"
          transactionDate="01 APR 2023"
          transactionId="CT123478898"
          transactionStatus="Success"
          transactionSource="Wallet"
          downloadReceipt={() => {}}
          shareReceipt={() => {}}
        />
      </CustomModal>
    </Box>
  );
};

export default RecurringTransactionsList;
