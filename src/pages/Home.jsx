import { Hero } from "../components";
import HCourses from "../components/HCourses";
import HRegister from "../components/HRegister";
import Habout from "../components/Habout";


const Home = ()=>{ 

    return(
        <div className=" bg-cover bg-no-repeat bg-center">
            <Hero />
            <Habout/>
            <HCourses/>
            <HRegister/>
        </div>
    )


}

export default Home;
