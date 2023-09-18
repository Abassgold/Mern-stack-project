import React from 'react';
import FrontPage from './pages/FrontPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Routes>
      <Route index element={<FrontPage/>}/>
    </Routes>
      
    </>
  )
}

export default App;
