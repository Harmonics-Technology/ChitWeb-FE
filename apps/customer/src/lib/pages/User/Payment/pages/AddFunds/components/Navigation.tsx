import { Box, Stack, Flex, Icon, Heading, Text } from '@chakra-ui/react';

import {
  BankIcon,
  RequestFundIcon,
  CardTopUpIcon,
} from '~/lib/components/Icons';
import type { NavigationItemProps, SideNavProps } from '~/lib/utilities/schema';

const NavigationItem = ({
  icon,
  title,
  description,
  isActive,
  onClick,
}: NavigationItemProps) => {
  return (
    <Box
      onClick={onClick}
      borderRadius="16px"
      borderTop={isActive ? '2px solid' : 'none'}
      borderLeft={isActive ? '2px solid' : 'none'}
      borderColor={isActive ? 'brand.primary' : 'none'}
      boxShadow={isActive ? '5px 5px 0px 0px rgba(96, 63, 239, 1)' : ''}
      p="3"
      cursor="pointer"
    >
      <Flex alignItems="center" gap="12px">
        <Icon as={icon} />
        <Stack spacing="6px">
          <Heading fontSize={16} fontWeight={isActive ? 700 : 500}>
            {title}
          </Heading>
          <Text fontSize={14} color="text.400">
            {description}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

const Navigation = ({ navPosition, setNavPosition }: SideNavProps) => {
  return (
    <Box borderRight="1px solid" borderColor="border.100" pr="5" w='50%'>
      <Stack spacing="24px">
        <NavigationItem
          title="Top Up Wallet"
          description="Fund wallet directly"
          icon={BankIcon}
          isActive={navPosition === 0}
          onClick={() => setNavPosition(0)}
        />
        <NavigationItem
          title="Top-up with card"
          description="Fund wallet directly with your card"
          icon={CardTopUpIcon}
          isActive={navPosition === 1}
          onClick={() => setNavPosition(1)}
        />
        <NavigationItem
          title="Request from Others"
          description="Send a request to any Chit user"
          icon={RequestFundIcon}
          isActive={navPosition === 2}
          onClick={() => setNavPosition(2)}
        />
      </Stack>
    </Box>
  );
};

export default Navigation;
