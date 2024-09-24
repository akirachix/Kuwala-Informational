import Team from "./component/Team";


export default function Home() {
  return (
   
      <main>
      <Team/>
      </main>
    
  );
import Products from './components/Products';
import Services from './components/Services';
import Footer from './components/Footer/Index';


export default function Home(){
  return(
    <main>
      <Products/>
      <Services/>
      <Footer/>
    </main>
  )
}

