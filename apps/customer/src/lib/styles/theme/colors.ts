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
    800: '#ACACAC',
    900: '#737171',
  },
  bg: {
    100: '#6844FF',
    200: '#2A1A6E',
    300: '#D0C7FB',
    400: '#2A1A6E',
    500: '#EBE7FD',
    600: '#333333',
    700: '#319402',
    800: '#FFC54D',
    900: '#067E8F',
  },
  border: {
    100: '#DDE6F0',
    200: '#5F5F5F',
  },
  actions: {
    100: 'rgba(208, 199, 251, 0.3)',
    200: 'rgba(235, 231, 253, 0.5)',
    300: 'rgba(194, 227, 178, 0.3)',
    400: 'rgba(252, 220, 220, 0.3)',
    500: 'rgba(134, 228, 199, 0.3)',
    600: 'rgba(229, 252, 255, 0.5)',
    700: 'rgba(235, 231, 253, 0.3)',
    800: '#E4F4DC',
    900: '#319402',
  },
  status: {
    100: '#DF0000',
    200: '#EEA30A',
    300: '#FFEFCF',
    400: '#BF0202',
    500: '#319402',
    600: '#047857',
    700: '#D9D9D9'
  },
  options: {
    100: '#5D83DC',
    200: 'rgba(93, 131, 220, 0.1)',
    300: '#00B26E',
    400: 'rgba(0, 178, 110, 0.1)',
    500: '#F93232',
    600: 'rgba(249, 50, 50, 0.1)',
    700: '#FCDCDC',
    800: 'rgba(235, 231, 253, 0.3)',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
