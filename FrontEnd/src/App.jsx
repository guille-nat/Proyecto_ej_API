import React from 'react';
import ListUsers from './components/ListUsers';
import { NavBar } from './components/NavBar';
import Home from './components/Home';
import Form from './components/Form';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

function App() {  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users-list' element={<ListUsers/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
      <NavBar/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
