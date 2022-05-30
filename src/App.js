import './App.css';
import Home from './Home';
import Header from './components/Header';
import Footer from './components/Footer';
//import Search from './Search'; 
import SearchPage from './components/SearchPage' 
import ParisMap from "./components/maps/ParisMap"
import { Routes, Route} from 'react-router-dom';

function App() { 
  return (

    // BEM
    <div className="App">
    {/* <h1>Let's build Airbnb clone !</h1> */}

  <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element ={<SearchPage/>} />
        <Route path='/parismap' element ={<ParisMap/>} />
      </Routes>
  <Footer />


{/*-------------------HOME---------------------*/}
    {/* Header */}

    {/* Banner */}
        {/* Search Date */}

    {/* Cards */}

    {/* Footer */}

{/*----------------SearchPage---------------*/}
    {/* Header */}

    </div>
  );
}

export default App;
