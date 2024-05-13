import { Box, Flex, Image, Text, Heading, Stack } from '@chakra-ui/react';

const DownloadApp = () => {
  return (
    <Box px="36px" maxW="1440px" mx="auto">
      <Box
        w="100%"
        mx="auto"
        bg="brand.primary"
        borderRadius="24px"
        pt="57px"
        mb="80px"
      >
        <Box maxW="1232px" mx="auto">
          <Flex alignItems="center" gap="55px">
            <Box maxW="677px">
              <Image src="/assets/mockup-4.png" w="100%" objectFit="cover" />
            </Box>

            <Box maxW="571px">
              <Stack spacing="51px">
                <Heading
                  fontSize={48}
                  lineHeight="64px"
                  fontWeight={700}
                  color="text.500"
                >
                  DOWNLOAD CHIT APP TODAY
                </Heading>

                <Box maxW="470px">
                  <Text
                    fontSize={18}
                    color="text.500"
                    lineHeight="30px"
                    fontWeight={400}
                  >
                    Join the millions who trust our Fintech solutions.
                    Experience the future of finance, today - enjoy a convenient
                    payment solution that allows you shop globally without
                    limitations.
                  </Text>
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
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default DownloadApp;
