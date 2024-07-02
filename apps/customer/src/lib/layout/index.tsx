'use client';

import { Box, Flex } from '@chakra-ui/react';
import { useState, useEffect, type ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import UserHeader from './UserHeader';
import UserSideNav from './UserSideNav';
import { usePathname } from 'next/navigation';
import RightPanel from './RightPanel';


type LayoutProps = {
  children: ReactNode;
};



const UserLayout = ({ children }: LayoutProps) => {
  return (
    <Box w='100%' position='relative'>
      <Flex>
        <UserSideNav />
        <Box as="main" position='absolute' left="20%" w="55%" py='30px' overflow='hidden'>
          <UserHeader />
          {children}
        </Box>
        <RightPanel />
      </Flex>
    </Box>
  );
}


const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <Box w='100%'>
      <Box>
        <Header />
        <Box as="main">
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );

}


const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsLoggedIn(pathname.includes('/user'));
  }, [pathname]);

  return (
    <Box w='100%'>
     {
        isLoggedIn ? <UserLayout>{children}</UserLayout> : <HomeLayout>{children}</HomeLayout>
     }
    </Box>
  );
};

export default Layout;
