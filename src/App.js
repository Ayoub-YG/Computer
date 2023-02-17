import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <div className='App'>
        <div className='div shadow-2xl'>
          <Navbar />
          <Home />
        </div>
      </div>

    </Router>
  );
}

export default App;