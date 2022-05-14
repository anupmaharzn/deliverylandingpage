import './scss/main.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import SecuritySection from './components/securitysec/Security';
import ServiceSection from './components/servicesec/Services';
import Appsection from './components/appsection/Appsection';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Hero />
        <About />
        <SecuritySection />
        <ServiceSection />
        <Appsection />
        <Contact />
        <Footer />
        <Routes>
          {/* <Route path='/' element={ } /> */}
        </Routes>

      </Router>
    </div>
  );
}

export default App;
