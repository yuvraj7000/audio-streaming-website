
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Library from './pages/Library';
import PlayCard from './components/PlayCard';
function App() {


  return (
    <Router>
   <div className="app flex">
    <SideBar></SideBar>
    <div className='page-section'>
    <NavBar></NavBar>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
        </Routes>
    </div>
    <div className='card-section flex items-end h-[100vh] justify-center pb-10'>
    <PlayCard/>
    </div>
   </div>
   </Router>
  )
}

export default App;
