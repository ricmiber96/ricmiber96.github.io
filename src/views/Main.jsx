import AppBanner from "../components/NavBar/AppBanner";
import MoreProjectsButton from "../components/ProjectsComponents/MoreProjectsButton";
import ProjectsContainer from "../components/ProjectsComponents/ProjectsContainer";


export default function Main(){

    return(
        <div className="container mx-auto mb-20">
            <AppBanner/>
            <ProjectsContainer size={3}/>
            <MoreProjectsButton/>
        </div>
    )
}