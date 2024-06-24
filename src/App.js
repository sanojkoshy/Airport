import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Service from './Components/Service';
import FAQ from './Components/FAQ';
import About from './Components/About';
import Contact from './Components/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />



      </Routes>
    </BrowserRouter>

  );
}

export default App;
