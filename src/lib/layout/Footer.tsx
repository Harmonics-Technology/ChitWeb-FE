import {
  Box,
  Flex,
  Link,
  Text,
  Stack,
  UnorderedList,
  ListItem,
  Heading,
} from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { useState, useLayoutEffect } from 'react';

import { PurpleChitLogo } from '../components/Logo';

type ListItemsProps = {
  items: string[];
};

const ListItems: React.FC<ListItemsProps> = ({ items }) => {
  return (
    <Box>
      {items.map((item, index) => (
        <ListItem
          color="text.200"
          mb="16px"
          key={index}
          fontWeight={400}
          fontSize={14}
        >
          {item}
        </ListItem>
      ))}
    </Box>
  );
};

type FooterListProps = {
  headingText: string;
  items: string[];
};

const FooterList: React.FC<FooterListProps> = ({ headingText, items }) => {
  return (
    <Box>
      <UnorderedList listStyleType="none">
        <Heading mb="24px" fontSize={16} fontWeight={700} color="text.200">
          {headingText}
        </Heading>
        <ListItems items={items} />
      </UnorderedList>
    </Box>
  );
};

const Footer = () => {
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const routesToHideNavbar = [
      '/signup',
      '/signin',
      '/forgot-password',
      '/reset-password',
      '/dashboard',
    ];
    setIsSigningUp(
      routesToHideNavbar.some((route) => pathname.includes(route))
    );
  }, [pathname]);

  if (isSigningUp) {
    return null;
  }

  return (
    <Box
      as="footer"
      w="100%"
      bg="brand.secondary"
      pt="100px"
      px="36px"
      pb="28px"
    >
      <Box maxW="1440px" mx="auto">
        <Box px="90px" pb="83px">
          <Flex alignItems="flex-start" justifyContent="space-between">
            <Box color="text.100" w="auto">
              <Stack spacing="24px">
                <PurpleChitLogo />
                <Text fontWeight={500}>Secure, reliable, and innovative</Text>
              </Stack>
            </Box>

            {/* <Box w='auto'>
              <Flex justifyContent='space-between'> */}
            <Box>
              <FooterList
                headingText="Quick Links"
                items={['Customer', 'Merchant', 'Documentation', 'Support']}
              />
            </Box>

            <Box>
              <FooterList
                headingText="Legals"
                items={['Terms and Conditions', 'Privacy Policy']}
              />
            </Box>

            <Box>
              <FooterList
                headingText="Contact Us"
                items={['+2348180041801 or +2348162812758', 'info@chit.com']}
              />
            </Box>
            {/* </Flex>
            </Box> */}
          </Flex>
        </Box>
      </Box>
      <Box w="100%" h="0.5px" bg="text.200" mb="16px" />
      <Box maxW="1440px" px="90px" mx="auto">
        <Text fontSize={12} color="text.200">
          &copy; {new Date().getFullYear()} Chit. All rights reserved{' '}
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
