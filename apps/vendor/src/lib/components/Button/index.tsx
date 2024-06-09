import { Button, Text, Flex, Icon, Box, Heading } from '@chakra-ui/react';
import Link from 'next/link';

import { BackwardArrowIcon } from '../Icons';
import type {
  ButtonProps,
  IconButtonProps,
  OutlineButtonProps,
  QuickActionItemProps,
  BackButtonProps,
} from '~/lib/utilities/schema';

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
      py="23px"
      px="18px"
      borderRadius="12px"
      fontWeight="normal"
      w={width}
      onClick={onClick}
      // border={`1px solid`}
      // borderColor={color}
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
  onClick,
}) => {
  return (
    <Button
      bg={bg}
      color={color}
      py="23px"
      px="18px"
      borderRadius="12px"
      fontWeight={600}
      border="1px solid"
      _hover={{ bg: 'none' }}
      width={width}
      borderColor={color}
      onClick={onClick}
    >
      <Flex alignItems="center" gap={2} flexDir={flip ? 'row-reverse' : 'row'}>
        <Icon as={icon} fontSize={20} />
        <Text>{text}</Text>
      </Flex>
    </Button>
  );
};

export const OutlineButtonComponent: React.FC<OutlineButtonProps> = ({
  color,
  text,
  onClick,
  width,
}) => {
  return (
    <Button
      bg="white"
      color={color}
      py="23px"
      px="18px"
      borderRadius="12px"
      fontWeight="normal"
      border="1px solid"
      borderColor={color}
      _hover={{ bg: color, color: 'white' }}
      onClick={onClick}
      width={width}
    >
      {text}
    </Button>
  );
};

export const ActionButton = ({
  title,
  bgColor,
  icon,
  onClick,
}: QuickActionItemProps) => {
  return (
    <Box
      boxShadow="md"
      borderRadius="8px"
      bg="text.500"
      p="3"
      cursor="pointer"
      onClick={onClick}
    >
      <Box
        bg={bgColor}
        w="50px"
        h="50px"
        mx="auto"
        borderRadius="50%"
        mb="2"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={icon} />
      </Box>
      <Text fontSize={13} color="text.400" fontWeight={500}>
        {title}
      </Text>
    </Box>
  );
};

export const QuickActionButton = ({
  title,
  bgColor,
  icon,
  onClick,
}: QuickActionItemProps) => {
  return (
    <Box
      boxShadow="md"
      borderRadius="12px"
      minW="130px"
      bg="text.500"
      p="6"
      cursor="pointer"
      onClick={onClick}
    >
      <Box
        bg={bgColor}
        w="50px"
        h="50px"
        mx="auto"
        borderRadius="50%"
        mb="3"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={icon} />
      </Box>
      <Text fontSize={14} textAlign="center" color="text.400" fontWeight={500}>
        {title}
      </Text>
    </Box>
  );
};

export const BackButton = ({ link, title }: BackButtonProps) => {
  return (
    <Link href={link}>
      <Box>
        <Flex alignItems="center" gap="24px">
          <BackwardArrowIcon />
          <Heading fontSize={30} color="text.200">
            {title}
          </Heading>
        </Flex>
      </Box>
    </Link>
  );
};
