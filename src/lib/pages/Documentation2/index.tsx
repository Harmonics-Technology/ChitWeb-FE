'use client';

import { Box } from '@chakra-ui/react';
import { useState } from 'react';

import DataPrivacy from './Sections/DataPrivacy';
import GettingStarted from './Sections/GettingStarted';
import Header from './Sections/Header';
import Hero from './Sections/Hero';

const Index = () => {
  const [step, setStep] = useState<number>(0);
  return (
    <Box>
      <Hero />
      <Box
        py="60px"
        maxW="1232px"
        mx="auto"
        bgImage="url('/assets/right-line.svg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="top 20px right 0px"
        px="8"
      >
        <Header step={step} setStep={setStep} />
        {step === 0 && <GettingStarted />}
        {step === 1 && <DataPrivacy />}
      </Box>
    </Box>
  );
};

export default Index;
