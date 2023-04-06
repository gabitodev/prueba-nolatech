import useAuth from "../../hooks/useAuth";
import { Flex, Icon, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { MdEdit } from 'react-icons/md';
import { useState } from "react";
import axios from "axios";

const EditUsername = ({...rest}) => {
  const { auth, setAuth } = useAuth();
  const [username, setUsername] = useState(auth?.username || '');

  const handleUpdate = async (event) => {
    if (event.key === 'Enter') {
      try {
        await axios.post('/api/config', { username, photo: ''  });
        setAuth({...auth, username})
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Flex py={4} flexDirection={'column'} gap={2} {...rest}>
      <Flex alignItems={'center'} gap={2} display={{ base: 'flex', lg: 'none' }}>
        <Text>Edit username</Text>
        <Icon as={MdEdit} />
      </Flex>
      <Flex justifyContent={{ base: 'flex-start', lg: 'center'} }>
        <InputGroup w={'max-content'} justifyContent={'center'} display={'flex'}>
          <Input
            variant={'ghost'}
            bgColor={'transparent'}
            type='text'
            value={username}
            paddingLeft={0}
            onChange={({ target }) => setUsername(target.value)}
            onKeyDown={handleUpdate}
          />
          <InputRightElement
            display={{ base: 'none', lg: 'flex' }}
            children={<MdEdit />}
          />
        </InputGroup>
      </Flex>
    </Flex>
  );
}

export default EditUsername;