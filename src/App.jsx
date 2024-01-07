import { BrowserRouter, Routes,  Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { Navbar, StarsCanvas } from "./components";
import Registration from "./pages/Registration";
import DegreeCourses from "./pages/DegreeCourses";
import DiplomaCourses from "./pages/DiplomaCourses";
import Information from "./pages/Information";
import CoursesPage from "./pages/CoursesPage";



const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/coursespage" element={<CoursesPage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/degree" element={<DegreeCourses />} />
          <Route path="/diploma" element={<DiplomaCourses />} />
          <Route path="/information" element={<Information />} />
        </Routes>
        <StarsCanvas></StarsCanvas>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


{/* <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className='relative z-0'>
        <About />
         ////<Experience />
        <Tech />
        <Works />
        /////<Feedbacks /> 
        
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter> */}