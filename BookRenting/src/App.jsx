import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Main from './pages/Main';
import Results from "./pages/Results";
import Footer from '../src/components/Footer';
import BookDetails from './pages/BookDetails';
import Best from './pages/Best';
import FAQ from './pages/FAQ';
import Romance from './pages/Romance'; 
import Science from "./pages/Science";
import History from "./pages/History";
import Mystery from "./pages/Mystery";
import Fantasy from "./pages/Fantasy";
import Thriller from "./pages/Thriller";
import SelfHelp from "./pages/SelfHelp";
import Biography from "./pages/Biography";



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />  
        <Route path="/results" element={<Results />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path='/bestBooks' element={<Best />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/romance' element={<Romance />} /> 
        <Route path='/Fantasy' element={<Fantasy />} /> 
        <Route path='/Mystery' element={<Mystery />} /> 
        <Route path='/thriller' element={<Thriller />} /> 
        <Route path='/Biography' element={<Biography />} /> 
        <Route path='/Self-Help' element={<SelfHelp />} /> 
        <Route path='/History' element={<History />} /> 
        <Route path='/Science' element={<Science />} /> 

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
