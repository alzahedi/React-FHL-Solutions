import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Start from './Start';
import Go from './Go';
import Yellow from './Yellow';
import Microsoft from './Microsoft';

const NavigationComponent = () => {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/go" element={<Go />} />
            <Route path="/yellow" element={<Yellow />} />
            <Route path="/microsoft" element={<Microsoft />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default NavigationComponent;
