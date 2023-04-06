import { Avatar, Flex, FormLabel, Icon, Input, useColorModeValue } from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";
import { MdAddAPhoto } from 'react-icons/md';
import EditUsername from "./EditUsername";

const EditPhoto = () => {
  const { auth } = useAuth();
  return (
    <Flex justifyContent={'center'} py={4} borderBottom={'1px'} flexDirection={'column'}>
      <FormLabel
        htmlFor="file-upload"
        cursor="pointer"
        textAlign="center"
        color="white"
        m="0"
        fontSize={{ base: 'sm' }}
      >
        <Avatar size={{ base: 'xl', md: '2xl' }} name={auth.username} src={auth.photo} position={'relative'}>
          <Flex
            position={'absolute'}
            bottom={-2}
            right={0}
            left={0}
            justifyContent={'center'}
          >
            <Icon
              as={MdAddAPhoto}
              w={6}
              height={6}
              color={useColorModeValue('blue.100', 'gray.700')}
            />
          </Flex>
        </Avatar>
      </FormLabel>
      <Input type="file" id="file-upload" display="none" onChange={ ({ target }) => handleImage(target) } />
      <EditUsername display={{base: 'none', lg: 'flex'}} />
    </Flex>
  );
}

export default EditPhoto;