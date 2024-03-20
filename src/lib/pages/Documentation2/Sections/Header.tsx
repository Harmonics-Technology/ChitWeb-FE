import { Box, Heading, Flex, Button } from '@chakra-ui/react';

import { ButtonComponent } from '~/lib/components/Button';
import type { DocumentationButtonProps } from '~/lib/utilities/schema';

const Header = ({ step, setStep }: DocumentationButtonProps) => {
  const buttons = ['Getting Started', 'Data Management'];
  return (
    <Box mb="66px">
      <Box mb="42px">
        <Heading
          color="text.200"
          textTransform="uppercase"
          fontSize={40}
          lineHeight="100px"
          fontWeight={900}
        >
          the{' '}
          <Box as="span" color="brand.primary" textDecoration="underline">
            chits
          </Box>
        </Heading>
      </Box>
      <Box>
        <Flex alignItems="center" gap="30px">
          {buttons.map((button, index) => {
            return (
              <Button
                borderRadius="8px"
                bg={index === step ? 'brand.secondary' : 'text.500'}
                color={index === step ? 'brand.primary' : 'text.200'}
                py="25px"
                fontSize={18}
                fontWeight={700}
                px="32px"
                onClick={() => setStep(index)}
                key={index}
                border={index === step ? '' : '2px solid'}
                borderColor={index === step ? '' : 'brand.secondary'}
              >
                {button}
              </Button>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
