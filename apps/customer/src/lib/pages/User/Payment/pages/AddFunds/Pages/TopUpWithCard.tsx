import {
  Box,
  Heading,
  Switch,
  Text,
  Stack,
  Image,
  Button,
  Flex,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import { VirtualCard } from '~/lib/components/Cards';
import { DeactivateCardIcon, LockCardIcon } from '~/lib/components/Icons';

import AddNewCardFlow from './AddNewCardFlow';

const AvailaleCards = () => {
  return (
    <Box>
      <Stack spacing="32px">
        <Heading fontSize={24} color="bg.200" fontWeight={500}>
          My Cards
        </Heading>
        <VirtualCard />

        <Box>
          <Heading mb="8px" fontSize={18} fontWeight={700}>
            Card Status
          </Heading>
          <Box boxShadow="lg" borderRadius="8px" padding="15px" bg="text.500">
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontWeight={500} color="text.200">
                Active
              </Text>
              <Switch colorScheme="messenger" size="md" ml="auto" />
            </Flex>
          </Box>
        </Box>

        <Box>
          <Heading mb="8px" fontSize={18} fontWeight={700}>
            Card Settings
          </Heading>
          <Box
            boxShadow="lg"
            borderRadius="8px"
            padding="15px"
            bg="text.500"
            mb="10px"
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Flex alignItems="center" gap="10px">
                <LockCardIcon />
                <Text fontWeight={500} color="text.200">
                  Lock Card
                </Text>
              </Flex>
              <Switch colorScheme="messenger" size="md" ml="auto" />
            </Flex>
          </Box>

          <Box
            boxShadow="lg"
            borderRadius="8px"
            padding="15px"
            bg="text.500"
            mb="10px"
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Flex alignItems="center" gap="10px">
                <DeactivateCardIcon />
                <Text fontWeight={500} color="text.200">
                  Deactivate Card
                </Text>
              </Flex>
              <Switch colorScheme="messenger" size="md" ml="auto" />
            </Flex>
          </Box>
        </Box>

        <Box textAlign="right">
          <Button
            bg="bg.200"
            color="text.500"
            boxShadow="md"
            borderRadius="7px"
          >
            <FaPlus />
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

const EmptyCard = () => {
  return (
    <Box>
      <Stack mb="35px">
        <Box>
          <Heading mb="8px" fontSize={24} fontWeight={600} color="text.200">
            Top-up with Card
          </Heading>
          <Text fontSize={14} color="text.400">
            Fund wallet directly with your card
          </Text>
        </Box>

        <Box>
          <Image src="/assets/empty-card.png" display="block" mx="auto" />
        </Box>

        <Box textAlign="center">
          <Heading mb="8px" fontSize={20} fontWeight={600} color="border.200">
            No Card to show
          </Heading>
          <Text fontSize={14} color="border.200">
            Add card to continue with your transaction
          </Text>
        </Box>
      </Stack>

      <Box textAlign="right">
        <Button bg="bg.200" color="text.500" boxShadow="md" borderRadius="7px">
          <FaPlus />
        </Button>
      </Box>
    </Box>
  );
};

const TopUpWithCard = () => {
  const cards = [1];
  const [showAddNewCardForm, setShowAddNewCardForm] = useState<boolean>(true);
  return (
    <Box>
      {showAddNewCardForm ? (
        <AddNewCardFlow />
      ) : (
        <Box>{cards.length > 0 ? <AvailaleCards /> : <EmptyCard />}</Box>
      )}
    </Box>
  );
};

export default TopUpWithCard;
