import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Flex,
  Button,
  VStack,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// import { FiveStarIcon } from '../Icons';
import type {
  PerksCardProps,
  FeatureCardProps,
  ReviewCardProps,
  CustomerFeatureCardProps,
  ProductCardProps,
} from '~/lib/utilities/schema';

const PerksCard = ({ cardImg, title, description }: PerksCardProps) => {
  return (
    <Box
      w="324px"
      minH="300px"
      py="7"
      px="5"
      bg="rgba(235, 231, 253, 0.4)"
      borderRadius="24px"
      backdropFilter="blur(5px)"
      position="relative"
    >
      <Box
        position="absolute"
        top="-60px"
        left="80px"
        filter="drop-shadow(-2px 64px 61px #603FEF)"
        w="120px"
        h="120px"
      >
        <Image src={cardImg} w="100%" h="100%" objectFit="cover" />
      </Box>
      <Box mt="60px">
        <Stack spacing="30px">
          <Heading
            fontSize={22}
            textTransform="capitalize"
            color="brand.primary"
            textAlign="center"
          >
            {title}
          </Heading>
          <Text textAlign="center" color="text.200" lineHeight="30px">
            {description}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default PerksCard;

export const FeatureCard = ({
  title,
  description,
  number,
}: FeatureCardProps) => {
  return (
    <Box
      maxW="500px"
      border="2px solid"
      borderColor="brand.primary"
      py="19px"
      px="30px"
      boxShadow="6px 6px 0px 0px rgba(96, 63, 239, 1)"
    >
      <Flex alignItems="center" gap="45px">
        <Box>
          <Heading fontSize={40} color="text.300">
            {number}
          </Heading>
        </Box>
        <Box>
          <Stack spacing="4px">
            <Heading color="brand.primary" fontSize={20}>
              {title}
            </Heading>
            <Text color="brand.primary">{description}</Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export const ReviewCard = ({
  img,
  review,
  userName,
  post,
}: ReviewCardProps) => {
  return (
    <Box
      maxW="400px"
      h="auto"
      border="2px solid"
      borderColor="brand.primary"
      boxShadow="3px 3px 0px 0px rgba(96, 63, 239, 1)"
      position="relative"
      px="30px"
      py="25px"
    >
      <Box
        w="60px"
        h="60px"
        border="2px solid"
        borderColor="brand.primary"
        borderRadius="50%"
        position="absolute"
        left="30px"
        top="-30px"
        // zIndex='999'
      >
        <Image
          src={img}
          w="100%"
          h="100%"
          borderRadius="50%"
          objectFit="cover"
        />
      </Box>

      <Box mt="20px">
        <Text lineHeight="30px" mb="16px" fontSize={14} color="text.200">
          {review}
        </Text>

        <Box>
          <Flex justifyContent="space-between">
            <Box>
              <Heading fontSize={14} color="brand.primary" mb="5px">
                {userName}
              </Heading>
              <Text fontSize={12} color="text.200">
                {post}
              </Text>
            </Box>
            <Box>
              {/* <FiveStarIcon /> */}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export const CustomerFeatureCard = ({
  img,
  title,
  description,
}: CustomerFeatureCardProps) => {
  return (
    <Box
      maxW="380px"
      h="auto"
      px="10"
      py="8"
      border="2px solid"
      borderColor="brand.primary"
      boxShadow="3px 3px 0px 0px rgba(96, 63, 239, 1)"
    >
      <Stack spacing="36px">
        <Box>
          <Image src={img} />
        </Box>
        <Box>
          <Stack spacing="10px">
            <Heading
              fontSize={24}
              textTransform="uppercase"
              color="brand.primary"
            >
              {title}
            </Heading>
            <Text fontSize={18} lineHeight="30px" color="text.400">
              {description}
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export const VirtualCard = () => {
  return (
    <Box
      p="5"
      borderRadius="8px"
      w="100%"
      h="195px"
      bgGradient="linear(to-br, bg.100 20%, bg.200 80%)"
    >
      <Stack direction="column" justifyContent="space-between" h="100%">
        <Box>
          <Flex alignItems="center" justifyContent="space-between">
            <Image src="/assets/chip.svg" />
            <Button
              bg="none"
              p="0"
              _hover={{ bg: 'none' }}
              color="text.500"
              fontSize={20}
            >
              <FaEyeSlash />
            </Button>
          </Flex>
        </Box>

        <Box>
          <Text
            color="text.500"
            fontSize={20}
            letterSpacing="3px"
            fontWeight={600}
          >
            2345 5445 9845 0345
          </Text>
        </Box>

        <Box>
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Stack spacing="5px" color="text.500">
                <Text fontSize={11}>Card Holder Name</Text>
                <Heading fontWeight={700} fontSize={14} letterSpacing="1px">
                  Ogunjimi Peace
                </Heading>
              </Stack>
            </Box>
            <Box>
              <Stack spacing="5px" color="text.500">
                <Text fontSize={11}>Expiry Date</Text>
                <Heading fontWeight={700} fontSize={14} letterSpacing="1px">
                  10/25
                </Heading>
              </Stack>
            </Box>
            <Image src="/assets/mastercard-logo.svg" />
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export const ProductCard = ({ image, title, category }: ProductCardProps) => {
  return (
    <Box w="140px" h="auto" borderRadius="12px" boxShadow="lg" p="3">
      <VStack>
        <Image src={image} />
        <Text fontWeight={600} fontSize={16}>
          {title}
        </Text>
        <Text
          fontSize={14}
          fontWeight={500}
          borderRadius="8px"
          bg="brand.100"
          color="brand.primary"
          px="10px"
          py="5px"
        >
          {category}
        </Text>
      </VStack>
    </Box>
  );
};
