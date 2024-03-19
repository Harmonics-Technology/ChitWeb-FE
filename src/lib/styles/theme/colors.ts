import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {
  brand: {
    100: '#EBE7FD',
    200: '#D0C7FB',
    300: '#B4A5F8',
    400: '#9883F5',
    500: '#7C61F2',
    600: '#4E32C4',
    700: '#3C2699',
    800: '#2A1A6E',
    900: '#180E43',
    // @ts-expect-error
    primary: '#603FEF',
    secondary: '#F3F1FE',
  },
  text: {
    100: '#434343',
    200: '#211F1F',
    300: '#11E4AC',
    400: '#434343',
    500: '#FFFFFF',
    600: '#333333',
    700: '#41F1C2',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
