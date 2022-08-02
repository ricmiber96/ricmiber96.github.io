import {Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import {Link} from 'react-router-dom';


export default function MenuItem({ children, isLast, to = "/", ...rest }){
    return (
        <Link to={to} style={{ margin:'16px'}}>
            <Text display="block" {...rest}>{children}</Text>
        </Link>
    )
}