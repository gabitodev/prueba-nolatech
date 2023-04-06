import { createContext, useState } from 'react';

export const CurrentChatContext = createContext({});

export const CurrentChatProvider = ({ children }) => {
  const [currentChat, setCurrentChat] = useState('1');
  return (
    <CurrentChatContext.Provider value={{ currentChat, setCurrentChat }}>
      {children}
    </CurrentChatContext.Provider>
  );
};

export default CurrentChatContext;