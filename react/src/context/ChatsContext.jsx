import { createContext, useState } from 'react';

export const ChatsContext = createContext({});

export const ChatsProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  return (
    <ChatsContext.Provider value={{ chats, setChats }}>
      {children}
    </ChatsContext.Provider>
  );
};

export default ChatsContext;