import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: '\'Open Sans\', sans-serif',
    body: '\'Inter\', sans-serif',
  },
});