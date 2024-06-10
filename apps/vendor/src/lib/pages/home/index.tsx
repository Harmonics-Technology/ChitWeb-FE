'use client';

import { Flex, Text, Box, Stack } from '@chakra-ui/react';

import DownloadApp from '~/lib/components/DownloadApp';
import CTASection from '~/lib/components/samples/CTASection';
import SomeImage from '~/lib/components/samples/SomeImage';
import SomeText from '~/lib/components/samples/SomeText';
import EncryptionService from '~/lib/utilities/encryptions';
import { IdentityService, LoginRequest, WalletService } from 'shared-services';

import Features from './Sections/Features';
import Hero from './Sections/Hero';
import HowItWorks from './Sections/HowItWorks';
import Patrons from './Sections/Patrons';
import Perks from './Sections/Perks';

const Home = () => {
  return (
    <Box>
      <Hero />
      <Perks />
      <Features />
      <HowItWorks />
      <Patrons />
      <DownloadApp />
    </Box>
  );
};

export default Home;
