import { Link, Box, Flex, Text, Button, Stack,Switch } from "@chakra-ui/react";
import MenuItem from "./MenuItem";
import {IoSunnySharp} from 'react-icons/io5'
import IoMdMoon from 'react-icons/io5'


export default function MenuLinks({isOpen}){

    return (
        <Box 
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        flexBasis={{ base: "100%", md: "auto" }}
        justify="space-between"
        color={'white'}
        fontSize='14px'>

            <MenuItem to="/" children="Home"></MenuItem>
            <MenuItem to="/tecnologies">Tecnologies</MenuItem>
            <MenuItem to="/projects">Projects </MenuItem>
            <MenuItem to="/experience">Experience</MenuItem>
            <MenuItem children={<IoSunnySharp size='2rem'/>}></MenuItem>
        
        </Box>
    )
}