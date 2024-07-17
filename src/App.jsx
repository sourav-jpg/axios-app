import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Create from './components/Create';
import Update from './components/Update';
import Read from './components/Read';
import Home from './components/Home';
function App() {
  return (
    <Router>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/create' element={<Create/>}/>
           <Route path='/update/:id' element={<Update/>}/>
           <Route path='/read/:id' element={<Read/>}/>
        </Routes>
    </Router>
    
  );
}

export default App;
