
import './App.css';
import About from './Component/About';
import Contact from './Component/ContactPage/Contact';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Portfolio from './Component/Portfolio/Portfolio';
import Price from './Component/Price';
import Services from './Component/Services';


function App() {
  return (
    <div className="App">
       <Header/>
      <Services/>
        <Portfolio/>

        <Navbar/>
        <About/>
       
        <Price/>
       <Contact/>
        <Footer/> 


      
    </div>
  );
}

export default App;
