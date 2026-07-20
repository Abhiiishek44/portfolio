import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PhotoDump from './Pages/PhotoDump';
import TouchCursor from './components/TouchCursor';

function App() {
  return (
    <Router>
      <TouchCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photodump" element={<PhotoDump />} />
      </Routes>
    </Router>
  );
}

export default App;
