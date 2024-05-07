import {
  Box,
  Heading,
  Select,
  FormLabel,
  Input,
  Flex,
  Button,
  Text,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

import { ButtonComponent } from '~/lib/components/Button';
import { BackwardArrowIcon } from '~/lib/components/Icons';

const AddNewCardFlow = () => {
  return (
    <Box>
      <Box mb="35px">
        <Flex alignItems="center" gap="40px">
          <Button bg="none">
            <BackwardArrowIcon />
          </Button>
          <Text fontSize={24} fontWeight={600}>
            Add Card
          </Text>
        </Flex>
      </Box>

      <Box mb="35px">
        <Stack spacing="20px">
          <Box>
            <FormLabel fontSize={14}>Select Bank</FormLabel>
            <Select bg="text.500">
              <option value="">First Bank</option>
              <option value="">First Bank</option>
              <option value="">First Bank</option>
              <option value="">First Bank</option>
            </Select>
          </Box>
          <Box>
            <FormLabel>Card Number</FormLabel>
            <Input
              bg="text.500"
              placeholder="Enter card number"
              fontSize={14}
            />
          </Box>
          <Box>
            <Box>
              <Flex alignContent="center" gap="10px">
                <Box w="50%">
                  <FormLabel color="text.200" fontSize={14}>
                    Expiration Date
                  </FormLabel>
                  <Input
                    bg="text.500"
                    placeholder="Enter card number"
                    fontSize={14}
                  />
                </Box>
                <Box w="50%">
                  <FormLabel color="text.200" fontSize={14}>
                    CVV
                  </FormLabel>
                  <Input
                    bg="text.500"
                    placeholder="Enter card number"
                    fontSize={14}
                  />
                </Box>
              </Flex>
            </Box>
          </Box>
        </Stack>
      </Box>
      <ButtonComponent
        text="Add Card"
        width="100%"
        color="text.500"
        bg="bg.200"
        onClick={() => {}}
      />
    </Box>
  );
};

export default AddNewCardFlow;
