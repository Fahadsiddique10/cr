import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Counter from "./components/Counter";
// import Counter from "./components/counter_main";
import Award from './components/Award';
import About from './components/About';
import Industries from './components/Industries';
// import Award_card from './components/Award_card';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Award/>
      <Counter/>
      <About/>
      <Industries />

    </>
  )
}

export default App