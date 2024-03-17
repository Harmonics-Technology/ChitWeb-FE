import { Box, Flex, Image, Stack, Heading, Text } from '@chakra-ui/react';

const HowItWorks = () => {
  return (
    <Box as="section" maxW="1232px" mx="auto" py="40px" mb="40px">
      <Flex alignItems="center" justifyContent="space-between">
        <Box maxW="500px">
          <Box mb="48px">
            <Heading
              color="text.200"
              textTransform="uppercase"
              textAlign="center"
              fontSize={40}
              lineHeight="95px"
              fontWeight={900}
            >
              how chit{' '}
              <Box as="span" color="brand.primary" textDecoration="underline">
                works
              </Box>
            </Heading>
          </Box>

          <Box mb="70px">
            <Box>
              <Flex alignItems="center" gap="20px">
                <Box
                  w="80px"
                  h="80px"
                  border="2px solid"
                  borderColor="brand.primary"
                  borderRadius="50%"
                  boxShadow="4px 4px 0px 0px rgba(96, 63, 239, 1)"
                />
                <Box maxW="344px">
                  <Stack spacing="5px">
                    <Heading color="brand.primary" fontSize={20}>
                      Open a CHIT wallet
                    </Heading>
                    <Text color="brand.primary">
                      Download via Playstore and Apple store Create a CHIT
                      wallet
                    </Text>
                  </Stack>
                </Box>
              </Flex>
            </Box>
            <Box w="1px" h="82px" bg="text.300" ml="40px" />
            <Box>
              <Flex alignItems="center" gap="20px">
                <Box
                  w="80px"
                  h="80px"
                  border="2px solid"
                  borderColor="brand.primary"
                  borderRadius="50%"
                  boxShadow="4px 4px 0px 0px rgba(96, 63, 239, 1)"
                />
                <Box maxW="344px">
                  <Stack spacing="5px">
                    <Heading color="brand.primary" fontSize={20}>
                      Verify your Identity
                    </Heading>
                    <Text color="brand.primary">Verify your BVN</Text>
                    <Text color="brand.primary">Verify Mobile Number</Text>
                  </Stack>
                </Box>
              </Flex>
            </Box>
            <Box w="1px" h="82px" bg="text.300" ml="40px" />
            <Box>
              <Flex alignItems="center" gap="20px">
                <Box
                  w="80px"
                  h="80px"
                  border="2px solid"
                  borderColor="brand.primary"
                  borderRadius="50%"
                  boxShadow="4px 4px 0px 0px rgba(96, 63, 239, 1)"
                />
                <Box maxW="344px">
                  <Stack spacing="5px">
                    <Heading color="brand.primary" fontSize={20}>
                      Start Transacting
                    </Heading>
                    <Text color="brand.primary">Set Pin</Text>
                    <Text color="brand.primary">Start Transacting</Text>
                  </Stack>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box maxW="680px" h="auto">
          <Image
            src="/assets/mockup-3.png"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HowItWorks;
