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
      border="1px solid"
      borderColor='border.100'
      p="3"
      cursor="pointer"
      w='100%'
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Flex alignItems="center" gap="16px">
            <Icon isActive={isActive} />
            <Text
              fontSize={16}
              fontWeight={500}
              color={isActive ? 'brand.primary' : '"text.400"'}
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
    <Box borderRight="1px solid" borderColor="border.100" pr="5">
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
        <Box
          onClick={() => setNavPosition(3)}
          borderRadius="8px"
          border="1px solid"
          borderColor='border.100'
          p="3"
          cursor="pointer"
          w='100%'
        >
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Flex alignItems="center" gap="16px">
                <DeleteAccountIcon isActive={navPosition === 3} />
                <Text
                  fontSize={16}
                  fontWeight={600}
                  color='status.400'                
                >
                  Delete Account
                </Text>
              </Flex>
            </Box>
            <ChevronRightIcon isActive={navPosition === 3} />
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default Navigation;
