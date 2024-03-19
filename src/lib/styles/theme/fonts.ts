import type { DeepPartial, Theme } from '@chakra-ui/react';
import { Figtree as FontBody } from 'next/font/google';

export const fontBody = FontBody({
  subsets: ['latin'],
  variable: '--font-body',
});

export const fonts: DeepPartial<Theme['fonts']> = {
  heading: fontBody.style.fontFamily,
  body: fontBody.style.fontFamily,
};

// export const fontBody = localFont({
//   src: [
//     {
//       path: '../../../../public/fonts/Lato-Light.ttf',
//       weight: '400',
//     },
//      {
//       path: '../../../../public/fonts/Lato-Regular.ttf',
//       weight: '500',
//     },
//      {
//       path: '../../../../public/fonts/Lato-Bold.ttf',
//       weight: '700',
//     },
//      {
//       path: '../../../../public/fonts/Lato-Black.ttf',
//       weight: '900',
//     },
//   ],
//   variable: '--font-body',
// });
