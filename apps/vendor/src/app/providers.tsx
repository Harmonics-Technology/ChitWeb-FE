'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { OpenAPI } from 'shared-services';

import { Chakra as ChakraProvider } from '~/lib/components/Chakra';
import { AuthContextProvider } from '~/lib/utilities/Context/AuthContext';
import ToasterWrapper from '~/lib/utilities/Toast/ToasterWrapper';
import { CookiesProvider } from 'next-client-cookies/server';



const Providers = ({ children }: { children: React.ReactNode }) => {
  OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASEURL as string;
  return (
    <CacheProvider>
      <ToasterWrapper />
        <CookiesProvider>
      <AuthContextProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </AuthContextProvider>
        </CookiesProvider>
    </CacheProvider>
  );
};

export default Providers;
