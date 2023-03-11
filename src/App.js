import './index.css';
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import Home from './components/Home';
import ScanHome from './components/ScanHome';
import StartScan from './components/StartScan';
import KeyboardTest from './components/KeyboardTest';
import MicroPhone from './components/MicroPhone'
import SoundTest from './components/SoundTest'
import Webcam from './components/Webcam';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
         <Route path='/'  element={<Home />}/>
         <Route path='/scanHome'  element={<ScanHome />}/>
         <Route path='/startScan'  element={<StartScan />}/>
         <Route path='/keyboardTest'  element={<KeyboardTest />}/>
         <Route path='/microPhone'  element={<MicroPhone />}/>
         <Route path='/soundTest'  element={<SoundTest />}/>
         <Route path='/cameraTest'  element={<Webcam />}/>
      </Routes>
    </Router>
  );
}

export default App;
