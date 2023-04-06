import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import HeaderProfile from "../../components/HeaderProfile";
import ChatsList from "./ChatsList";
import useChats from "../../hooks/useChat";
import { Divider, Flex, Spinner, Text, useColorModeValue } from "@chakra-ui/react";
import Chat from "../chats";

const Home = () => {
  const { auth, setAuth } = useAuth();
  const { chats, setChats } = useChats();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCofig = async () => {
      const { data } = await axios.get('/api/config');
      setAuth(data);
    }
    const getChats = async () => {
      const { data } = await axios.get('/api/chats');
      setChats(data);
    }

    const getData = async () => {
      await getCofig();
      await getChats();
      setIsLoading(false);
    }
    getData();
  }, []);

  const bgColorFlex = useColorModeValue('gray.300', 'gray.900');

  if (isLoading) {
    return (
      <Flex minH="calc(100vh - 15rem)" justify="center" align="center" direction="column" gap="2">
        <Spinner size="lg" />
        <Text>Cargando...</Text>
      </Flex>
    );
  }

  return (
    <Flex bgColor={bgColorFlex}>
      <Flex 
      flexDirection={'row'}
      height={{ base: 'inherit', lg: '100vh' }}
      p={{ base: 0 , lg: 4 }}
      maxW={'7xl'}
      mx={'auto'}
    >
      <Flex flexDirection={'column'} w={{ base: 'full', lg: '30%' }} h={'100%'}>
        <HeaderProfile username={auth.username} photo={auth.photo} h={{ base: '10%', lg: '20%' }} displayInput={'block'} />
        <ChatsList chats={chats}/>
      </Flex>
      <Divider orientation='vertical' display={{ base: 'none', lg: 'block' }} />
      <Chat display={{ base: 'none', lg: 'flex' }}  />
    </Flex>

    </Flex>
  );
}

export default Home;