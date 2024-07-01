import { Flex, Link, Text } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';

const Footer = () => {

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
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link href="https://sznm.dev" isExternal rel="noopener noreferrer">
          sznm.dev
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
