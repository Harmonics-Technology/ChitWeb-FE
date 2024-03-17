import { Button, Text, Flex, Icon } from '@chakra-ui/react';

import type { ButtonProps, IconButtonProps } from '~/lib/utilities/schema';

export const ButtonComponent: React.FC<ButtonProps> = ({
  bg,
  color,
  text,
  width,
  onClick,
}) => {
  return (
    <Button
      bg={bg}
      color={color}
      py="25px"
      px="18px"
      borderRadius="12px"
      fontWeight="normal"
      w={width}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export const IconButtonComponent: React.FC<IconButtonProps> = ({
  bg,
  color,
  text,
  icon,
  width,
  flip,
}) => {
  return (
    <Button
      bg={bg}
      color={color}
      py="25px"
      px="18px"
      borderRadius="12px"
      fontWeight="normal"
      border={`1px solid ${color}`}
      _hover={{ bg: 'none' }}
      width={width}
    >
      <Flex alignItems="center" gap={2} flexDir={flip ? 'row-reverse' : 'row'}>
        <Icon as={icon} fontSize={20} />
        <Text>{text}</Text>
      </Flex>
    </Button>
  );
};
