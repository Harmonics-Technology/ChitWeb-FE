import {
  FormControl,
  FormLabel,
  GridItem,
  Text,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";
import type { FieldError, UseFormRegister, Path } from "react-hook-form";

interface FormInputProps<TFormValues extends Record<string, unknown>> {
  name: Path<TFormValues>;
  placeholder?: string;
  label?: string;
  register: UseFormRegister<TFormValues>;
  error: FieldError | undefined;
  type?: string;
  required?: boolean;
  disableLabel?: boolean;
  validate?: any;
  icon?: any;
  variant?: string;
  borderColor?: string;
  borderRadius?: string;
  placeholderColor?: string;
  defaultValue: string | number | undefined;
  format?: string;
  value?: string | number | undefined;
  testId?: string;
  w?: string;
  h?: string;
  padding?: string;
}

export const PrimaryTextarea = <TFormValues extends Record<string, any>>({
  name,
  required = false,
  type = "text",
  label = "",
  register,
  validate = {},
  error,
  disableLabel = false,
  placeholder = "",
  variant = "outline",
  borderColor = "gray.300",
  borderRadius = "md",
  placeholderColor = "gray.300",
  defaultValue,
  format,
  value,
  icon,
  testId,
  w,
  h,
  padding,
}: FormInputProps<TFormValues>) => {
  return (
    <FormControl
      isInvalid={error as unknown as boolean}
      mb="1rem"
      fontFamily="'DM Sans', sans-serif"
    >
      <FormLabel fontSize=".8rem">{label}</FormLabel>
      <Textarea
        placeholder={placeholder}
        {...register(name, { required, ...validate })}
        defaultValue={defaultValue}
        isDisabled={disableLabel}
        padding={padding}
        size="sm"
        h={h}
        resize="none"
        focusBorderColor="none"
        // bgColor="rgba(25,25,25,.03)"
        borderColor="gray.400"
        borderRadius="5px"
        // boxShadow="0px 0px 9px rgba(0, 127, 130, 0.37)"
      />
      <FormErrorMessage fontSize=".7rem" color="red">
        {(error?.type === "required" && `${label} is required`) ||
          error?.message}
      </FormErrorMessage>
    </FormControl>
  );
};
