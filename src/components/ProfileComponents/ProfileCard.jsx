// import {
//     Heading,
//     Flex,
//     Avatar,
//     Box,
//     Center,
//     Text,
//     Stack,
//     Button,
//     Link,
//     Badge,
//     useColorModeValue,
//   } from '@chakra-ui/react';

// //ICONS
// import {MdInsertDriveFile} from "react-icons/md"
// import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";
// import { SiGmail,SiDevdotto } from "react-icons/si";
// import { IoLogoMedium } from "react-icons/io5";
// import { IconContext } from "react-icons";

// export default function ProfileCard(){

//     return(
//         <Box 
//         display="grid"
//         p={6}
//         borderWidth={1}
//         borderRadius={8}
//         bg={'##ffffff40'}

//         >

//             <Flex display="grid" align="center" content="center" direction="column" justify="center">
//                 <Avatar size='xl' src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
//                 alt={'Avatar Alt'}
//                 mb={4}
//                 />
//                 <Button mb={2} leftIcon={<MdInsertDriveFile/>} colorScheme='teal' variant='outline' size='lg'>
//                     View CV
//                 </Button>
//             </Flex>
//             <Flex justify={'space-between'} color={'white'} style={{alignItems:'space-between'}}>
//                 <IconContext.Provider style={{justifyContent:"space-between"}} value={{size:'4rem',justifyContent:'space-between', margin:'1.5rem', color:'#FFF'}}>
//                    <Link>
//                         <AiFillLinkedin/>
//                     </Link>
//                     <Link>
//                         <AiFillGithub/>
//                     </Link>
//                     <Link>
//                         <SiGmail/>
//                     </Link>
//                     <Link>
//                         <SiDevdotto/>
//                     </Link>
//                 </IconContext.Provider>
//             </Flex>
            
//         </Box>
//     )
// }