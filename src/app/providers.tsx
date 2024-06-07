'use client';

import { CacheProvider } from '@chakra-ui/next-js';

import { Chakra as ChakraProvider } from '~/lib/components/Chakra';
import { AuthContextProvider } from '~/lib/utilities/Context/AuthContext';
import ToasterWrapper from '~/lib/utilities/Toast/ToasterWrapper';
import { OpenAPI } from '~/services/core/OpenAPI';

const Providers = ({ children }: { children: React.ReactNode }) => {
  OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASEURL as string;
  return (
    <CacheProvider>
      <ToasterWrapper />
      <AuthContextProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </AuthContextProvider>
    </CacheProvider>
  );
};

export default Providers;
