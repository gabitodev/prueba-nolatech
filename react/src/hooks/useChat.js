import { useContext } from 'react';
import ChatsContext from '../context/ChatsContext';

const useChats = () => {
  return useContext(ChatsContext);
};

export default useChats;