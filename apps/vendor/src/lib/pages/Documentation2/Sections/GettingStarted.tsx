import { Box, Stack, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const faqs = [
  {
    question: 'What is CHIT?',
    answer:
      'Chit is a voucher- based payment system that offers a convenient payment solution that allows users to shop globally without worrying about currency limitations.',
  },
  {
    question: 'How do I create a CHIT wallet?',
    answer:
      'To create a CHIT wallet, simply download the CHIT app from the App Store or Google Play. Follow the on-screen instructions to sign up, providing your name, email, and creating a secure password.',
  },
  {
    question: 'How to create a merchant wallet?',
    answer:
      'To create a CHIT wallet, simply download the CHIT Vendor app from the App Store or Google Play. Follow the on-screen instructions to sign up, providing your  Business name, email, CAC and create a secure password.',
  },
  {
    question: 'What is the minimum age requirement for opening a CHIT wallet?',
    answer:
      'CHIT does not have a specific age limit for opening a wallet. As long as the user has a valid BVN (Bank Verification Number), they are welcome to create a CHIT wallet. This approach ensures accessibility to a wide range of users, promoting financial inclusion and convenience for individuals with diverse needs and backgrounds.',
  },
  {
    question: 'What information is required to open a CHIT wallet?',
    answer:
      'To open a CHIT account, we require your basic information, including your full name, email address, and a secure password.',
  },
];

const GettingStarted = () => {
  return (
    <Box>
      <Stack spacing="55px">
        {faqs.map((item: any, index: number) => {
          return (
            <Box key={item}>
              <Stack spacing="12px">
                <Heading fontSize={20} color="brand.primary" fontWeight={600}>
                  {item.question}
                </Heading>
                <Text fontSize={18} color="text.200">
                  {item.answer}
                </Text>
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default GettingStarted;
