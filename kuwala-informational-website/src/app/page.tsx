
import Team from "./components/Team";
import Aboutpage from "./components/About";
import Products from './components/Products';
import Services from './components/Services';
import Footer from './components/Footer/Index';


export default function Home(){
  return(
    <main>
       <Aboutpage/>
      <Products/>
      <Services/>
      <Team/>
      <Footer/>
     
     
    </main>
  )
}

