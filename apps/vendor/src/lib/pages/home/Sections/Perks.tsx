import { Box, Heading, VStack, Flex } from '@chakra-ui/react';
import React from 'react';

import '../../../styles/perks.css';
import PerksCard from '~/lib/components/Cards';

const Perks = () => {
  return (
    <Box id="perks-container" maxW="1440px" mx="auto" h="auto" mb="80px">
      <Box maxW="1232px" mx="auto" p="9">
        <Box mb="100px">
          <Heading
            color="text.200"
            textTransform="uppercase"
            textAlign="center"
            fontSize={40}
            lineHeight="95px"
            fontWeight={900}
          >
            it's all{' '}
            <Box as="span" color="brand.primary" textDecoration="underline">
              Perks
            </Box>{' '}
            with chit
          </Heading>
        </Box>

        <Box>
          <Flex alignItems="flex-start" justifyContent="center" gap="40px">
            <PerksCard
              cardImg="/assets/exchange-icon.svg"
              title="seamless transactions"
              description="With Chit you get to stay in control of your finances and enjoy a hassle-free, secure and efficient way to make  and receive payments."
            />
            <PerksCard
              cardImg="/assets/lock-icon.svg"
              title="Secure online payment"
              description="Enjoy a convenient payment solution that allows you to shop globally without worrying about currency limitations."
            />
            <PerksCard
              cardImg="/assets/hourglass-icon.svg"
              title="Excellent Customer Service"
              description="Experience the convenience of digital vouchers: Making purchases effortless with fintech' s voucher system."
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Perks;
