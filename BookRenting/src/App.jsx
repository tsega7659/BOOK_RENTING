import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Main from './pages/Main';
import Results from "./pages/Results";
import Footer from '../src/components/Footer';
import BookDetails from './pages/BookDetails';
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />  
        <Route path="/results" element={<Results />} />
        <Route path="/book/:id" element={<BookDetails />} />
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
