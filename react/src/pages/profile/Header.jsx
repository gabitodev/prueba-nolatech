import { Avatar, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { HiArrowLeft, HiOutlineDotsVertical } from 'react-icons/hi';
import { useNavigate} from "react-router-dom";
import { MdEdit } from 'react-icons/md';

const Header = () => {
  const navigate = useNavigate();

  const handleArrowLeftClick = () => {
    navigate('/');
  }

  return (
    <Flex
      flexDirection={'column'}
      gap={4}
      bgColor={useColorModeValue('gray.100', 'gray.800')}
    >
      <Flex
      w='full'
      alignItems={'center'}
      justifyContent={{ base: 'space-between', lg: 'flex-end' }}
      p={4}
      >
        <Flex
          alignItems={'center'}
          gap={4}
          display={{ base: 'flex', lg: 'none' }}
        >
          <Icon
            w={{ base: 6 }}
            h={{ base: 6 }}
            as={HiArrowLeft}
            onClick={handleArrowLeftClick}
          />
          <Icon
            border={'1px'}
            rounded={'full'}
            as={MdEdit}
            p={2}
            w={{ base: 8 }}
            h={{ base: 8 }}

          />
          <Text fontWeight={'700'}>Edit profile</Text>
        </Flex>
          <Icon
            w={{ base: 6 }}
            h={{ base: 6 }}
            as={HiOutlineDotsVertical}
          />
      </Flex>
    </Flex>
  );
}

export default Header;