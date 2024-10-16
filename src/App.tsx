import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Counter from "./components/Counter";
import Award from './components/Award';
import About from './components/About';
import Industries from './components/Industries';
import CaseSlider from './components/CaseSlider';
import TestimonialsSlide from './components/TestimonialsSlide';
import Letter from './components/Letter';
import LogoSlide from './components/LogoSlide';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Award/>
      <Counter/>
      <About/>
      <Industries />
      <CaseSlider />
      <TestimonialsSlide />
      <Letter />
      <LogoSlide />
      
    </>
  )
}

export default App