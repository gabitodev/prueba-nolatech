import { Avatar, Divider, Flex, ListItem, Text, UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useCurrentChat from "../../hooks/useCurrentChat";

const ChatsCard = ({ chat }) => {
  const navigate = useNavigate();
  const { currentChat,setCurrentChat } = useCurrentChat();

  const getLocalDate = (date) => {
    if (date) {
      const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
      return new Date(date).toLocaleString({ timezone: timeZone });
    }
    return null;
  };

  const handleClick = (id) => {
    setCurrentChat(id);
    if (innerWidth < 1024) {
      navigate(`/chat/${id}`);
    }
  }

  const formatHours = (date) => {
    const [hour, minutes] = date.split(':');
    return `${hour}:${minutes}`;
  }

  return (
    <ListItem
      display={'flex'}
      flexDirection={'row'}
      py={2}
      px={4}
      color={useColorModeValue('gray.700', 'gray.300')}
      onClick={() => handleClick(chat.chatId)}
      cursor={'pointer'}
      alignItems={'center'}
      gap={2}
      _hover={{ bgColor: useColorModeValue('gray.100', 'gray.600')}}
    >
      <Avatar size='md' name={chat.destinaraty} />
      <Flex flexDirection={'column'} borderBottom={'1px'} borderColor={useColorModeValue('gray.100', 'gray.600')}>
        <Flex justifyContent={'space-between'}>
          <Text fontSize={'lg'} fontWeight={'500'} >{chat.destinaraty}</Text>
          <Text fontSize={'sm'} textAlign="end">{getLocalDate(chat.lastMessage).split(', ')[0]}</Text>
        </Flex>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Text noOfLines={1} maxWidth={'50%'} flexGrow={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Temporibus dolor veniam commodi nemo impedit voluptas perferendis nam quo facere omnis vero inventore consequatur, 
            consequuntur expedita, accusamus quas autem sapiente recusandae.
          </Text>
          <Text textAlign="end" fontSize={'sm'}>{formatHours(getLocalDate(chat.lastMessage).split(', ')[1])}</Text>
        </Flex>
      </Flex>
    </ListItem>
  );
}

export default ChatsCard;