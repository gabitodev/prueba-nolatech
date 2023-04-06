import { Flex, Icon, Switch, Text, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from 'react-icons/fa';

const EditTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      py={4}
      flexDirection={'column'}
      gap={4}
      borderBottom={'1px'}
    >
      <Text>Theme</Text>
      <Flex alignItems={'center'} gap={4}>
        <Icon
          as={FaSun}
          w={{ base: 6, lg: 6 }}
          h={{ base: 6, lg: 6 }} 
        />
        <Switch size={'md'} isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        <Icon
          as={FaMoon}
          w={{ base: 6, lg: 6 }}
          h={{ base: 6, lg: 6 }} 
        />
      </Flex>
    </Flex>
  );
}

export default EditTheme;