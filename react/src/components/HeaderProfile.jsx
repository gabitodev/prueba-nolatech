import { Avatar, Button, Flex, Icon, Input, Menu, MenuButton, MenuItem, MenuList, Text, useColorModeValue } from "@chakra-ui/react";
import { HiArrowLeft, HiOutlineDotsVertical } from 'react-icons/hi';
import { useNavigate, useParams, Link as ReactRouterLink } from "react-router-dom";

const HeaderProfile = ({ username, photo, displayInput, ...rest }) => {
  const params = useParams();
  const navigate = useNavigate();

  const handleArrowLeftClick = () => {
    navigate('/');
  }

  return (
    <Flex
      flexDirection={'column'}
      gap={4}
      bgColor={useColorModeValue('gray.100', 'gray.800')}
      boxShadow={'base'}
      {...rest}
    >
      <Flex
      w='full'
      alignItems={'center'}
      justifyContent={'space-between'}
      p={4}
    >
        <Flex
          alignItems={'center'}
          gap={4}
        >
          {params?.id &&
            <Icon
              w={{ base: 6 }}
              h={{ base: 6 }}
              as={HiArrowLeft}
              onClick={handleArrowLeftClick}
            />
          }
          <Avatar
            size='md'
            name={username}
            src={photo}
          />
          <Text fontWeight={'700'}>{username}</Text>
        </Flex>
        <Menu placement='bottom-end'>
          <MenuButton as={Button} variant={'unstyled'}>
            <Icon
              w={{ base: 6 }}
              h={{ base: 6 }}
              as={HiOutlineDotsVertical}
            />
          </MenuButton>
          <MenuList>
            <MenuItem as={ReactRouterLink} to={'/profile'}>Mi perfil</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex px={4}>
        <Input
          display={{ base: 'none', lg:  displayInput }}
          type='text'
          placeholder='Buscar...'
        />
      </Flex>
    </Flex>
  );
}

export default HeaderProfile;