
import './App.css';
import {BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import {Home} from './components/Home/Home';
import {Characters} from './components/Characters/Characters';
import { Header } from './components/Header/Header';
import { Locations } from './components/Locations/Location';
import Search from './components/Search/Search';



function App() {
  return (
    <div className="App">
  
    <BrowserRouter>
    <Header/>

    {/* <header>
      <NavLink to="" activeclassname={'home'}>Home</NavLink>
      <NavLink to="characters" activeclassname={'characters'}>Characters</NavLink>
    </header> */}
    <Routes>
    <Route path="" element={<Home />}/>
    <Route path="characters" element={<Characters />}/>
    <Route path="locations" element={<Locations />}/>
    <Route path="search" element={<Search/>}/>

    </Routes>





    </BrowserRouter>
   
    </div>
  );
}

export default App;
