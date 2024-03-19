import { Box, Heading, Flex, Stack } from '@chakra-ui/react';

import InstructionComponent from '~/lib/components/Instruction';

const Instructions = () => {
  return (
    <Box py="60px" maxW="1232px" mx="auto">
      <Box mb="70px">
        <Box>
          <Heading
            color="text.200"
            textTransform="uppercase"
            fontSize={40}
            lineHeight="100px"
            fontWeight={900}
          >
            the{' '}
            <Box as="span" color="brand.primary" textDecoration="underline">
              chits
            </Box>
          </Heading>
        </Box>
      </Box>

      <Box>
        <Stack spacing="90px">
          <InstructionComponent
            title="Getting Started"
            descriptions={[
              'Get started with our platform today to unlock a world of possibilities for your business',
              'Our team is here to support you every step of the way.',
            ]}
            questions={[
              'What is Chit?',
              'How do I create a CHIT wallet?',
              'How to create a merchant wallet?',
              'What is the minimum age requirement for opening a CHIT wallet?',
            ]}
          />
          <InstructionComponent
            title="Getting Started"
            descriptions={[
              'Get started with our platform today to unlock a world of possibilities for your business',
              'Our team is here to support you every step of the way.',
            ]}
            questions={[
              'What is Chit?',
              'How do I create a CHIT wallet?',
              'How to create a merchant wallet?',
              'What is the minimum age requirement for opening a CHIT wallet?',
            ]}
          />
          {/* <InstructionComponent

                    /> */}
        </Stack>
      </Box>
    </Box>
  );
};

export default Instructions;
