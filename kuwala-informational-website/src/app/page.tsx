import Navbar from './components/Navbar';
import LandingPage from './components/Landingpage';
import Products from './components/Products';
import Services from './components/Services';
import Footer from './components/Footer/Index';
import Team from "./components/Team";

export default function Home() {
  return (

    <div className="min-h-screen">
     <Navbar/>
     <LandingPage/>
     <Services/>
     <Products/>
     <Team/>
      <Footer/>

    </div>

  );
  }