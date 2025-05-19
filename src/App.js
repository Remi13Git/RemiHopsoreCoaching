import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Premium4 from './pages/premium-4/Premium-4';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Premium4 />} />
      </Routes>
    </Router>
  );
}

export default App;
