import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

import type { UnderlineTextProps } from '~/lib/utilities/schema';

const UnderlineText = ({
  text,
  color,
  fontSize,
  fontWeight,
}: UnderlineTextProps) => {
  return (
    <Heading
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      // borderBottom='4px solid'
      // borderBottomColor={color}
      textDecoration="underline"
    >
      {text}
    </Heading>
  );
};

export default UnderlineText;
