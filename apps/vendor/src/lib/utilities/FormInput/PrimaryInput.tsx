import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  Icon,
  InputRightElement,
  InputLeftElement,
  HStack,
  Tooltip,
  Button
} from '@chakra-ui/react';
import React from 'react';
import type { FieldError, UseFormRegister, Path } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { HiInformationCircle } from 'react-icons/hi2';

interface FormProps<TFormValues extends Record<string, unknown>> {
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  error: FieldError | undefined;
  label: string;
  type?: string;
  defaultValue?: any;
  fontWeight?: number | string;
  icon?: boolean;
  placeholder?: string;
  passwordVisible?: boolean;
  changeVisibility?: any;
  focusBorderColor?: string;
  required?: boolean;
  validate?: any;
  borderRadius?: string;
  otp?: any;
  left?: boolean;
  value?: any;
  toolTip?: any;
  h?: any;
  disableLabel?: boolean;
  readonly?: boolean;
}

const PrimaryInput = <TFormValues extends Record<string, any>>({
  name,
  register,
  error,
  label,
  type = 'text',
  icon = false,
  placeholder,
  fontWeight,
  passwordVisible,
  defaultValue,
  changeVisibility,
  focusBorderColor,
  required = false,
  validate = {},
  borderRadius = '4px',
  otp,
  left = false,
  value,
  toolTip,
  h = '2.8rem',
  disableLabel,
  readonly,
}: FormProps<TFormValues>) => {
  //
  return (
    <FormControl
      w="100%"
      isInvalid={error as unknown as boolean}
      fontFamily="'DM Sans', sans-serif"
    >
      <HStack align="center" spacing="0" mb="">
        <FormLabel fontSize={14} color="text.200" textTransform="capitalize">
          {label}
        </FormLabel>
        {toolTip && (
          <Tooltip hasArrow p=".5rem" label={toolTip} borderRadius="4px">
            <span>
              <Icon as={HiInformationCircle} fontSize=".8rem" cursor="help" />
            </span>
          </Tooltip>
        )}
      </HStack>
      <InputGroup w="100%">
        {left && (
          <InputLeftElement
            cursor="pointer"
            h="full"
            fontSize=".9rem"
            fontWeight="500"
          >
            <Icon as={value} />
          </InputLeftElement>
        )}
        <Input
          type={type}
          w="100%"
          py="20px"
          px="16px"
          value={value}
          // onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          fontSize={15}
          border="1px solid"
          borderColor="border.100"
          fontWeight={400}
          readOnly={readonly}
          _placeholder={{ color: 'text.800', fontWeight: 400, fontSize: 15 }}
          {...register(name, { required, ...validate })}
        // type={type}
        // // p="20px"
        // placeholder={placeholder}
        // w="100%"
        // h={h}
        // defaultValue={defaultValue}
        // fontWeight={fontWeight}
        // borderRadius={borderRadius}
        // focusBorderColor={focusBorderColor || 'none'}
        // borderColor="gray.400"
        // disabled={disableLabel}
        // // ref={ref || undefined}
        // _placeholder={{
        //   fontSize: '14px',
        // }}
        />
        {icon && (
          <InputRightElement
            width="4.5rem"
          >
            <Button
              onClick={changeVisibility}
              h="1.75rem"
              size="sm"
              bg="none"
              _hover={{ bg: 'none' }}
            >
              {otp || (passwordVisible ? <FaEye /> : <FaEyeSlash />)}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage fontSize=".7rem" color="red">
        {(error?.type === 'required' && `${label} is required`) ||
          error?.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default PrimaryInput;
