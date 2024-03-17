import { Box, VStack, Heading, Text, Stack, Flex } from '@chakra-ui/react';

import { ReviewCard } from '~/lib/components/Cards';

const Patrons = () => {
  return (
    <Box mb="80px" maxW="1232px" mx="auto">
      <Stack spacing="90px">
        <Box>
          <VStack>
            <Heading
              color="text.200"
              textTransform="uppercase"
              textAlign="center"
              fontSize={40}
              lineHeight="60px"
              fontWeight={700}
            >
              our patrons are{' '}
              <Box as="span" color="brand.primary" textDecoration="underline">
                impressed
              </Box>
            </Heading>
            <Text fontSize={18} color="text.400">
              Join the millions who trust our Fintech solutions. Secure,
              reliable, and innovative - we've got you covered.
            </Text>
          </VStack>
        </Box>

        <Box>
          <Flex alignItems="center" justifyContent="space-between">
            <ReviewCard
              img="/assets/face-card.jpg"
              review="Lorem ipsum dolor sit amet consectetur. Integer et massa eu semper. Tellus nisl auctor imperdiet ut enim."
              userName="Munira Adamu-Ibrahim"
              post="Merchant User"
            />
            <ReviewCard
              img="/assets/face-card.jpg"
              review="Lorem ipsum dolor sit amet consectetur. Integer et massa eu semper. Tellus nisl auctor imperdiet ut enim."
              userName="Munira Adamu-Ibrahim"
              post="Merchant User"
            />
            <ReviewCard
              img="/assets/face-card.jpg"
              review="Lorem ipsum dolor sit amet consectetur. Integer et massa eu semper. Tellus nisl auctor imperdiet ut enim."
              userName="Munira Adamu-Ibrahim"
              post="Merchant User"
            />
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default Patrons;
