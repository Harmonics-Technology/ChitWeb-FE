import { Box, Icon, Text, Stack } from '@chakra-ui/react';

import { ImageIcon } from '../Icons';

const DocumentationCard = () => {
  return (
    <Box
      w="240px"
      p="20px"
      h="237px"
      borderRadius="40px"
      border="2px solid"
      borderColor="brand.primary"
      boxShadow="lg"
    >
      <Stack spacing="15px">
        <Box
          w="100%"
          h="120px"
          bg="brand.100"
          borderRadius="24px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={ImageIcon} />
        </Box>
        <Text fontWeight={500}>Create Chit wallet.jpg</Text>
        <Text color="border.200" fontWeight={500}>
          1.59MB
        </Text>
      </Stack>
    </Box>
  );
};

export default DocumentationCard;
