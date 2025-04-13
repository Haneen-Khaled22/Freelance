
import './App.css';
import AboutUs from './Components/AboutUs';
import ResponsiveAppBar from './Components/AppBar';
import ContactUs from './Components/ContactUs';

import Footer from './components/footer';
import Home from './components/Home';
import FirstSection from './Components/HomeImage';


function App() {
  return (
   
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
       
        <ResponsiveAppBar />
          <FirstSection />
          <AboutUs/>
          <ContactUs/>

        <Footer />
      </div>
   
  );
}

export default App;
