import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

export default function MenuToogle({toggle, isOpen}){

    return(

        <Box display={{base: "block", md:"none"}} onClick={toggle}>
            {isOpen ? <MdClose/> : <MdMenu/>}
        </Box>
        
    )

}