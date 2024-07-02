import { Box, Flex } from '@chakra-ui/react';
import ThemeToggle from './ThemeToggle';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const routesToHideNavbar = [
      '/signup',
      '/signin',
      '/forgot-password',
      '/reset-password',
      '/verify-account'
    ];
    setIsLoggedIn(
      routesToHideNavbar.some((route) => pathname.includes(route))
    );
  }, [pathname]);

  if (isLoggedIn) {
    return null;
  }

  return (
    <Flex as="header" width="full" align="center">
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
