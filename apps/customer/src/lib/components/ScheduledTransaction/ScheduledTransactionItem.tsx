import { Box, Flex, Image, Text, Stack, Heading } from "@chakra-ui/react";



const ScheduledTransactionItem = () => {
    return (
        <Box py="1">
            <Flex justifyContent="space-between" alignItems="center">
                <Box>
                    <Flex alignItems="center" gap="8px">
                        <Image
                            src="/assets/images/coursera.png"
                            w="30px"
                            h="30px"
                            objectFit="cover"
                            borderRadius='8px'
                        />
                        <Stack spacing="3px" alignItems="flex-start">
                            <Heading fontSize={12} color="text.200" fontWeight={700}>
                                Spotify
                            </Heading>
                            <Text fontSize={10} fontWeight={600} color="border.200">
                                Next Payment:{' '}
                                <Box as="span" color="brand.primary">
                                    15/11
                                </Box>
                            </Text>
                        </Stack>
                    </Flex>
                </Box>
                <Box>
                    <Flex alignItems="flex-end" gap="2px">
                        <Heading fontSize={15}>$9.15</Heading>
                        <Text fontSize={10} fontWeight={600}>
                            USD
                        </Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default ScheduledTransactionItem