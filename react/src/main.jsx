import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/500.css';
import '@fontsource/open-sans/700.css';
import { theme } from './config/theme';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import router from './App';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ChatsProvider } from './context/ChatsContext';
import { CurrentChatProvider } from './context/CurrentChat';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <AuthProvider>
        <ChatsProvider>
          <CurrentChatProvider>
            <RouterProvider router={router} />
          </CurrentChatProvider>
        </ChatsProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
