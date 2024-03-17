import { Box, Flex, Image, Heading, Stack } from '@chakra-ui/react';

import { FeatureCard } from '~/lib/components/Cards';

const Features = () => {
  return (
    <Box as="section" maxW="1232px" mx="auto" mb="77px">
      <Flex justifyContent="space-between">
        <Box maxW="649px" h="auto">
          <Image
            src="/assets/mockup-2.png"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
        <Box>
          <Box mb="42px">
            <Heading
              color="text.200"
              textTransform="uppercase"
              textAlign="center"
              fontSize={40}
              lineHeight="95px"
              fontWeight={900}
            >
              Features you'll{' '}
              <Box as="span" color="brand.primary" textDecoration="underline">
                love
              </Box>
            </Heading>
          </Box>

          <Box mb="70px">
            <Stack spacing="32px">
              <FeatureCard
                title="Digital Wallet"
                number="01"
                description="We provide a seamless digital wallet, centralizing all your financial needs in one place"
              />
              <FeatureCard
                title="CHIT Generation"
                number="02"
                description="Our CHIT generation feature provides a quick and convenient method for generating vouchers"
              />
              <FeatureCard
                title="Invoice Generation"
                number="03"
                description="Create an in-app invoice for your customers"
              />
            </Stack>
          </Box>

          <Box>
            <Flex alignItems="center" gap="15px">
              <Box as="a">
                <Image
                  src="/assets/appstore.png"
                  alt="download from appstore button"
                />
              </Box>
              <Box as="a">
                <Image
                  src="/assets/playstore.png"
                  alt="download from appstore button"
                />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Features;
