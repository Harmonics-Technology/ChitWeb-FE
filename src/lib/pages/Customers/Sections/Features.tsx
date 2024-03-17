import { Box, Stack, Heading, Text, VStack, Flex } from '@chakra-ui/react';

import { CustomerFeatureCard } from '~/lib/components/Cards';

const Features = () => {
  return (
    <Box maxW="1232px" mx="auto" py="89px">
      <Stack spacing="70px">
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
              embrace the{' '}
              <Box as="span" color="brand.primary" textDecoration="underline">
                chit
              </Box>
            </Heading>
            <Text fontSize={18} color="text.400">
              Join the millions who trust our Fintech solutions. Secure,
              reliable, and innovative - we've got you covered.
            </Text>
          </VStack>
        </Box>

        <Box>
          <Flex justifyContent="center" gap="60px">
            <CustomerFeatureCard
              title="generate chit"
              description="Our CHIT generation feature provides a quick and convenient method for generating vouchers"
              img="/assets/customer-feature-1.png"
            />
            <CustomerFeatureCard
              title="generate chit"
              description="Our CHIT generation feature provides a quick and convenient method for generating vouchers"
              img="/assets/customer-feature-2.png"
            />
            <CustomerFeatureCard
              title="generate chit"
              description="Our CHIT generation feature provides a quick and convenient method for generating vouchers"
              img="/assets/customer-feature-3.png"
            />
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default Features;
