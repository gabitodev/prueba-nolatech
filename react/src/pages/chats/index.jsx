import { useParams } from "react-router-dom";
import HeaderProfile from "../../components/HeaderProfile";
import useChats from "../../hooks/useChat";
import { Flex, Input, InputGroup, InputRightElement, Text, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineSend } from 'react-icons/ai';
import useCurrentChat from "../../hooks/useCurrentChat";
import { useEffect, useState } from "react";

const Chat = ({ ...rest }) => {
  const { chats } = useChats();
  const { currentChat } = useCurrentChat();
  const [chatInfo, setChatInfo] = useState({});
  
  useEffect(() => {
    setChatInfo(chats.find(chat => chat.chatId === currentChat));
  }, [currentChat])

  return (
    <>
      {chatInfo &&
        <Flex
          flexDirection={'column'}
          height={{ base: '100vh', lg: 'calc(100vh - 2rem)'  }}
          bgColor={useColorModeValue('white', 'gray.700')}
          w={{ base: 'full', lg: '70%'}}
          {...rest}
        >
          <HeaderProfile username={chatInfo.destinaraty} photo={''} h={'10%'} displayInput={'none'} />
          <Flex flexDirection={'column'} h={'80%'} overflow={'auto'}>
            <Flex flexDirection={'column'} gap={'4'} p={4}>
              <Text bgColor={useColorModeValue('blue.100', 'blue.400')} maxW={'80%'} borderRadius={'lg'} p={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
              <Text bgColor={useColorModeValue('blue.100', 'blue.400')} maxW={'80%'} borderRadius={'lg'} p={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
              <Text bgColor={useColorModeValue('blue.100', 'blue.400')} maxW={'80%'} borderRadius={'lg'} p={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            </Flex>
            <Flex flexDirection={'column'} gap={'4'} p={4} alignItems={'flex-end'}> 
              <Text bgColor={useColorModeValue('gray.300', 'gray.600')} maxW={'80%'} borderRadius={'lg'} p={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            </Flex>
            <Flex flexDirection={'column'} gap={'4'} p={4}>
              <Text bgColor={useColorModeValue('blue.100', 'blue.400')} maxW={'80%'} borderRadius={'lg'} p={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
              <Text bgColor={useColorModeValue('blue.100', 'blue.400')} maxW={'80%'} borderRadius={'lg'} p={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
              <Text bgColor={useColorModeValue('blue.100', 'blue.400')} maxW={'80%'} borderRadius={'lg'} p={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            </Flex>
            <Flex flexDirection={'column'} gap={'4'} p={4} alignItems={'flex-end'}> 
              <Text bgColor={useColorModeValue('gray.300', 'gray.600')} maxW={'80%'} borderRadius={'lg'} p={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
              <Text bgColor={useColorModeValue('gray.300', 'gray.600')} maxW={'80%'} borderRadius={'lg'} p={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            </Flex>
          </Flex>
        <Flex h={'10%'} alignItems={'center'} p={4} bg={useColorModeValue('gray.100', 'gray.800')}>
          <InputGroup>
            <Input type='text' placeholder='Write message here' />
            <InputRightElement children={<AiOutlineSend color='green.500' />} />
          </InputGroup>
        </Flex>
      </Flex>
      }
    </>
  );
}

export default Chat;