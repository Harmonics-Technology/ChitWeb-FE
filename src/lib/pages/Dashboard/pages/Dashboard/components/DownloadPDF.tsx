import { Box, Flex, Image, Heading, Text, Stack } from '@chakra-ui/react';

import { ButtonComponent } from '~/lib/components/Button';

const DownloadPDF = () => {
  return (
    <Box w="100%" p="5" bg="brand.100" borderRadius="8px">
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Stack spacing="12px">
            <Heading fontSize={16} color="text.200">
              PDF Report
            </Heading>
            <Text color="text.200">Download your report</Text>
            <ButtonComponent
              text="Download PDF"
              bg="brand.primary"
              onClick={() => {}}
              color="text.500"
              width="165px"
            />
          </Stack>
        </Box>
        <Box>
          <Image src="/assets/pdf-report.png" />
        </Box>
      </Flex>
    </Box>
  );
};

export default DownloadPDF;
