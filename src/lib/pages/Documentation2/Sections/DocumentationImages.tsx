import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import DocumentationCard from '~/lib/components/DocumentationCard';

const DocumentationImages = () => {
  return (
    <Box py="60px" maxW="1232px" mx="auto" mb="12">
      <Flex alignItems="center" gap="62px">
        <DocumentationCard />
        <DocumentationCard />
        <DocumentationCard />
        <DocumentationCard />
      </Flex>
    </Box>
  );
};

export default DocumentationImages;
