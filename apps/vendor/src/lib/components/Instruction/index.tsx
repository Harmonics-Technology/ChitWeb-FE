import { Box, Heading, Text, Flex, Stack } from '@chakra-ui/react';

import type { InstructionComponentProps } from '~/lib/utilities/schema';

const InstructionComponent = ({
  title,
  descriptions,
  questions,
}: InstructionComponentProps) => {
  return (
    <Box w="100%">
      <Flex alignItems="flex-start" gap="40px" w="100%">
        <Box
          w="40px"
          h="40px"
          border="2px solid"
          borderColor="brand.primary"
          boxShadow="3px 3px 0px 0px rgba(96, 63, 239, 1)"
        />
        <Box>
          <Stack spacing="10px" w="100%">
            <Heading color="brand.primary" fontSize={24} fontWeight={700}>
              {title}
            </Heading>
            <Flex justifyContent="space-between" gap="230px">
              <Box maxW="382px">
                <Stack spacing={3}>
                  {descriptions?.map((item: string) => (
                    <Text lineHeight="30px" key={item}>
                      {item}
                    </Text>
                  ))}
                </Stack>
              </Box>
              <Box maxW="450px">
                <Stack spacing="18px">
                  {questions?.map((item: string) => {
                    return (
                      <Flex alignItems="center" gap="20px" key={item}>
                        <Box w="12px" h="12px" bg="brand.primary" />
                        <Text>{item}</Text>
                      </Flex>
                    );
                  })}
                </Stack>
              </Box>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default InstructionComponent;
