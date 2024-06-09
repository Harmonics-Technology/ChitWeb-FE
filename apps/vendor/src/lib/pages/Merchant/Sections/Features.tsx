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
              fontWeight={900}
            >
              let chit work for{' '}
              <Box as="span" color="brand.primary" textDecoration="underline">
                you
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
              title="invoicing"
              description="Our CHIT generation feature provides a quick and convenient method for generating vouchers"
              img="/assets/customer-feature-4.png"
            />
            <CustomerFeatureCard
              title="seamless transactions"
              description="Stay in control of your finances: Track every transaction with fintech's innovative tools."
              img="/assets/customer-feature-5.png"
            />
            <CustomerFeatureCard
              title="receive voucher payment"
              description="Track your financial journey: Fintech's transaction history feature puts your financial history at your fingertips."
              img="/assets/customer-feature-6.png"
            />
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default Features;
