import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import NavBar from "./components/NavBar.jsx"

import Home from './pages/Home'


export default function App() {
  return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
  );
}