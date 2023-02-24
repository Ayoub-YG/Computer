import './index.css';
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import Home from './components/Home';
import ScanHome from './components/ScanHome';
function App() {
  return (
    <Router>
      <Routes>
         <Route path='/'  element={<Home />}/>
         <Route path='/scanHome'  element={<ScanHome />}/>
      </Routes>
    </Router>
  );
}

export default App;