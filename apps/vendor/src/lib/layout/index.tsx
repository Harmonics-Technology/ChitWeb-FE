'use client';

import { Box, Stack } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import '../styles/globals.css';

import DashboardHeader from './DashboardHeader';
import DashboardSideNav from './DashboardSideNav';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <Box position="relative" bg="rgba(100, 100, 100, 0.1)">
      <Stack direction="row">
        <DashboardSideNav />
        <Box py="20px" px="25px" position="absolute" left="18%" w="82%">
          <Stack direction="column" spacing="22px">
            <DashboardHeader />
            <Box as="main" w="100%">
              {children}
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

const HomepageLayout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  );
};

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsLoggedIn(pathname.includes('/user'));
  }, [pathname]);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <Box transition="0.5s ease-out">
      {isLoggedIn ? (
        <DashboardLayout>{children}</DashboardLayout>
      ) : (
        <HomepageLayout>{children}</HomepageLayout>
      )}
    </Box>
  );
};

export default Layout;
