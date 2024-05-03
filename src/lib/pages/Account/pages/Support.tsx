import {
  Box,
  Heading,
  Text,
  Flex,
  InputGroup,
  Input,
  InputLeftElement,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

import { ButtonComponent } from '~/lib/components/Button';
import { SearchIcon } from '~/lib/components/Icons';

const Support = () => {
  const questions = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box w="100%">
      <Box mb="32px">
        <Flex alignItems="center" gap="54px">
          <Box>
            <Heading fontSize={24}>Frequently Asked Questions (FAQ's)</Heading>
          </Box>
          <Box>
            <InputGroup>
              <InputLeftElement pointerEvents="none" mt="1" ml="1">
                <SearchIcon />
              </InputLeftElement>
              <Input
                type="tel"
                w="320px"
                size="lg"
                placeholder="Phone number"
                border="2px solid"
                borderColor="brand.300"
                color="brand.primary"
                _placeholder={{ color: 'brand.primary' }}
              />
            </InputGroup>
          </Box>
        </Flex>
      </Box>

      <Box as="section" mb="64px">
        <Accordion allowToggle>
          <Flex
            alignItems="flex-start"
            justifyContent="space-between"
            flexWrap="wrap"
            rowGap="20px"
          >
            {questions.map((question, index) => {
              return (
                <Box w={['100%', '48%']}>
                  <AccordionItem
                    w="100%"
                    border="2px solid"
                    borderColor="border.100"
                    borderRadius="8px"
                    py="10px"
                    px="7px"
                  >
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Section 2 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Box>
              );
            })}
          </Flex>
        </Accordion>
      </Box>

      <Box
        as="section"
        w="240px"
        h="auto"
        borderRadius="8px"
        py="27px"
        px="24px"
        border="2px solid"
        borderColor="border.100"
        float="right"
      >
        <Stack spacing="22px">
          <Text fontWeight={500} color="text.400">
            Need further help?
          </Text>
          <ButtonComponent
            text="Live Chat Support"
            color="text.500"
            bg="brand.primary"
            onClick={() => {}}
            width="190px"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Support;
