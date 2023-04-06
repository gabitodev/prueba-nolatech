import { useContext } from 'react';
import CurrentChatContext from '../context/CurrentChat';

const useCurrentChat = () => {
  return useContext(CurrentChatContext);
};

export default useCurrentChat;