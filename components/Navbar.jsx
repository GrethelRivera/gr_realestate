import { Link } from 'next/link';
import { Menu, MenuBurtton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs -search';
import { FiKey } from 'react/fi';

const Navbar = () => (

    <Flex p='2' borderBotto='1px' borderColo='gray.100'>
         <Box fontSize='3xl' color='blue.400' fontWeight='bold'> 
            <Link href='/' paddingLeft='2'>Realtor</Link>
   
    </Box> 
    <Spacer />
    <Box>
    <Menu> 
        <MenuButton as={IconButton} icon={<FcMenu/>} variant='outlined' color ='red.400' />
<MenuList>
<Link href='/' passHref> 
<MenuItem icon={<FcHome />}>Home</MenuItem>
</Link>
</MenuList>
</Menu>
</Box>
</Flex>
)

export default NavBar;