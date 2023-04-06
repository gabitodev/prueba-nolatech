import Header from "./Header";
import EditPhoto from "./EditPhoto";
import EditUsername from "./EditUsername";
import { Box, Flex } from "@chakra-ui/react";
import EditTheme from "./EditTheme";

const Profile = () => {
  return (
    <Flex
      flexDirection={'column'}
      maxW={'7xl'}
      mx={'auto'}
    >
      <Header />
      <Box px={4} >
        <EditPhoto />
        <EditUsername display={{base: 'flex', lg: 'none'}} borderBottom={'1px'} />
        <EditTheme />
      </Box>
    </Flex>
  );
}

export default Profile;