import './App.css';
import Home from './home'
import Contact from './contactus';
import Aboutus from './aboutus';
import List from './list';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div><nav className="navbar">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2504/2504884.png" 
              alt="Logo"
              className="logo"
            />
          
          <div className="logo-name">
              <Link to="/Home" className="nav-link"style={{ fontSize: '24px', fontWeight: 'bold' }}>MyWebsite</Link>
            </div>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/Aboutus" className="nav-link">About Us</Link>
            </li>
            <li>
              <Link to="/Contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <footer className="footer">
          <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        </footer>
      </Router>

      <List/>
    </>
  );
}

export default App;

