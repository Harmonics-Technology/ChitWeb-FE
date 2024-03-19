import { Box } from '@chakra-ui/react';

import DownloadApp from '~/lib/components/DownloadApp';

import Features from './Sections/Features';
import Hero from './Sections/Hero';

const index = () => {
  return (
    <Box>
      <Hero />
      <Features />
      <DownloadApp />
    </Box>
  );
};

export default index;
