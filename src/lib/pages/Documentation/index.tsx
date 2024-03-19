import { Box } from '@chakra-ui/react';

import DownloadApp from '~/lib/components/DownloadApp';

import Hero from './Sections/Hero';
import Instructions from './Sections/Instructions';

const index = () => {
  return (
    <Box>
      <Hero />
      <Instructions />
      <DownloadApp />
    </Box>
  );
};

export default index;
