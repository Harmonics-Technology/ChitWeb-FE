import { Box, Heading, Image, Text, Stack, Flex } from '@chakra-ui/react';
import React from 'react';

import { ButtonComponent } from '~/lib/components/Button';
import { WhiteSettingsIcon } from '~/lib/components/Icons';

const RecurringPayments = () => {
  return (
    <Box
      bgGradient="linear(to-br, bg.100 20%, bg.200 80%)"
      w="100%"
      h="310px"
      borderRadius="12px"
      px="5"
      py="8"
    >
      <Stack w="100%" h="100%" justifyContent="space-between">
        <Box>
          <Flex alignItems="center" justifyContent="space-between">
            <Heading fontSize={24} fontWeight={500} color="text.500">
              Recurring Payments
            </Heading>
            <WhiteSettingsIcon />
          </Flex>
        </Box>

        <Box>
          <Text color="text.500" fontSize={15}>
            Lörem ipsum fonolog misofiering. Issade cyndiktisk. Tecism ans,
            retailtainment att diakrati etnosion. Prefoni pseudovis paracentrism
            detologi beren.
          </Text>
        </Box>

        <Box>
          <Flex justifyContent="space-between" alignItems="flex-end">
            <ButtonComponent
              text="Add Recurring Payment"
              color="brand.primary"
              bg="text.500"
              width="231px"
              onClick={() => {}}
            />
            <Image src="/assets/calendar.png" />
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default RecurringPayments;
