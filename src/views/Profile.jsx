import DescriptionCard from "../components/ProfileComponents/DescriptionCard";
import ProfileCard from "../components/ProfileComponents/ProfileCard";


// import {Flex, Center } from '@chakra-ui/react';
// import ProjectsContainer from "../components/ProjectsComponents/ProjectsContainer";

export default function Profile(){


    return(
        <>
            <DescriptionCard></DescriptionCard>
            <ProfileCard></ProfileCard>
            <h1 className="text-3xl font-bold underline bg-red-300">
      Hello world!
    </h1>
        </>

    )
}