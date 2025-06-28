import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import Membership from './componets/Membership'
import Events from './componets/Events';
import About from './componets/About';
import Join from "./componets/Join";

const App = () => {
  return (
    <div>
     <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Home' element={<Home/>}/>
         <Route path='/Membership' element={<Membership/>}/>
         <Route path='/Events' element={<Events/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Join' element={<Join/>}/>

      </Routes>
      {/* <div className='h-[600px]' ></div> */}
    </div>
  );
};

export default App;
