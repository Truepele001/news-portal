import Navbar from './components/Navbar';
import Home from './pages/Home';
import Politics from './pages/Politics';
import Sports from './pages/Sports';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </>
  );
}

export default App;
