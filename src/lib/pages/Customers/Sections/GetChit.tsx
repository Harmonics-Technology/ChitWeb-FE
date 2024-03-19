import { Box, Image, Flex, Heading, Text } from '@chakra-ui/react';

const GetChit = () => {
  return (
    <Box py="75px" maxW="1440px" mx="auto" pl="79px">
      <Flex gap="84px" alignItems="center">
        <Box maxW="500px">
          <Box mb="2">
            <Heading
              color="text.200"
              textTransform="uppercase"
              fontSize={40}
              lineHeight="100px"
              fontWeight={900}
            >
              get your{' '}
              <Box as="span" color="brand.primary" textDecoration="underline">
                chit peek
              </Box>
            </Heading>
          </Box>
          <Box>
            <Text fontSize={18} lineHeight="30px" color="text.400">
              Our simple and clean interface makes it easy for you to locate
              your desired service. All the services are accessible from the
              home page, making it user-friendly. Here's a quick look that will
              keep you longing. Download the CHIT app to enjoy the full
              experience.
            </Text>
          </Box>
        </Box>
        <Box maxW="849px">
          <Image src="/assets/mockup-5.png" w="100%" objectFit="cover" />
        </Box>
      </Flex>
    </Box>
  );
};

export default GetChit;
