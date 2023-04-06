import { UnorderedList, useColorModeValue } from "@chakra-ui/react";
import ChatsCard from "./ChatsCard";

const ChatsList = ({ chats }) => {
  return (
    <UnorderedList 
      w='full'
      display={'flex'} 
      m={0} 
      flexDirection={'column'} 
      gap={2}
      height={{ base: 'inherit', lg: '90%' }}
      bgColor={useColorModeValue('white', 'gray.700')}
      overflow={{ base: 'none', lg: 'auto'}}
    >
      {chats.map(chat => <ChatsCard key={chat.chatId} chat={chat} />)}
    </UnorderedList>
  );
}

export default ChatsList;