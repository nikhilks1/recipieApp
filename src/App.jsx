import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './components/View';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Recipe from './components/Recipe';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<View />} />
        <Route path=':id/recipe' element={<Recipe />} />
      </Routes>
    </>
  )
}

export default App
