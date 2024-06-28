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
import { InvoiceListItem } from '~/lib/components/TransactionListItem';
import { TransactionListItemProps } from '~/lib/utilities/schema';

const TransactionsList = () => {
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
                    Time
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
            <InvoiceListItem
              image="/assets/coursera.png"
              transactionTitle="Money Sent Withdrawal!"
              transactionAmount="20,000"
              transactionDate="01 APR 2023"
              transactionTime="10:50AM"
              action={openTransactionDetailsModal}
              transactionId="CT123478898"
              transactionStatus="Inv #024"
            />

            <InvoiceListItem
              image="/assets/coursera.png"
              transactionTitle="Money Sent Withdrawal!"
              transactionAmount="20,000"
              transactionDate="01 APR 2023"
              transactionTime="10:50AM"
              action={openTransactionDetailsModal}
              transactionId="CT123478898"
              transactionStatus="Inv #024"
            />

            <InvoiceListItem
              image="/assets/coursera.png"
              transactionTitle="Money Sent Withdrawal!"
              transactionAmount="20,000"
              transactionDate="01 APR 2023"
              transactionTime="10:50AM"
              action={openTransactionDetailsModal}
              transactionId="CT123478898"
              transactionStatus="Inv #024"
            />

            <InvoiceListItem
              image="/assets/spotify.png"
              transactionTitle="Money Sent Withdrawal!"
              transactionAmount="20,000"
              transactionDate="01 APR 2023"
              transactionTime="10:50AM"
              action={() => {}}
              transactionId="CT123478898"
              transactionStatus="Inv #024"
            />

            <InvoiceListItem
              image="/assets/coursera.png"
              transactionTitle="Money Sent Withdrawal!"
              transactionAmount="20,000"
              transactionDate="01 APR 2023"
              transactionTime="10:50AM"
              action={openTransactionDetailsModal}
              transactionId="CT123478898"
              transactionStatus="Inv #024"
            />
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TransactionsList;
