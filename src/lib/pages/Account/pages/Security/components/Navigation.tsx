import { Box, Stack, Flex, Heading, Text } from '@chakra-ui/react';

import {
  ChevronRightIcon,
  TransactionPinIcon,
  ChangePasswordIcon,
  TwoFAIcon,
  DeleteAccountIcon,
} from '~/lib/components/Icons';
import type {
  SideNavProps,
  SecurityNavigationItemProps,
} from '~/lib/utilities/schema';

const NavigationItem = ({
  Icon,
  title,
  isActive,
  onClick,
}: SecurityNavigationItemProps) => {
  return (
    <Box
      onClick={onClick}
      borderRadius="8px"
      border="2px solid"
      borderColor={isActive ? 'bg.200' : 'border.100'}
      p="3"
      cursor="pointer"
      w="350px"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Flex alignItems="center" gap="16px">
            <Icon />
            <Text
              fontSize={16}
              fontWeight={600}
              color={isActive ? 'bg.200' : '"text.400"'}
            >
              {title}
            </Text>
          </Flex>
        </Box>
        <ChevronRightIcon isActive={isActive} />
      </Flex>
    </Box>
  );
};

const Navigation = ({ navPosition, setNavPosition }: SideNavProps) => {
  return (
    <Box borderRight="1px solid" borderColor="border.100" px="7">
      <Stack spacing="24px">
        <NavigationItem
          title="Transaction Pin"
          Icon={TransactionPinIcon}
          isActive={navPosition === 0}
          onClick={() => setNavPosition(0)}
        />
        <NavigationItem
          title="Change Password"
          Icon={ChangePasswordIcon}
          isActive={navPosition === 1}
          onClick={() => setNavPosition(1)}
        />
        <NavigationItem
          title="2FA"
          Icon={TwoFAIcon}
          isActive={navPosition === 2}
          onClick={() => setNavPosition(2)}
        />
        <NavigationItem
          title="Delete Account"
          Icon={DeleteAccountIcon}
          isActive={navPosition === 3}
          onClick={() => setNavPosition(3)}
        />
      </Stack>
    </Box>
  );
};

export default Navigation;
