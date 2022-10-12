import React  from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Added from './components/Added/Added';
import routes from './routes';
// import Navbar from './components/navbar/navbar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
        
        </BrowserRouter>

  );
}

export default App;