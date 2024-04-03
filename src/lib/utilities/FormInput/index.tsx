import { Input, Box } from '@chakra-ui/react';

import type { FormInputProps } from '../schema';

const FormInput = ({
  type,
  width,
  value,
  setValue,
  placeholder,
}: FormInputProps) => {
  return (
    <Box w={width}>
      <Input
        type={type}
        w="100%"
        py="20px"
        px="16px"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        fontSize={15}
        border="1px solid"
        borderColor="border.100"
        _placeholder={{ color: 'text.800', fontWeight: 400 }}
      />
    </Box>
  );
};

export default FormInput;