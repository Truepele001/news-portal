import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>DailyNews</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/politics">Politics</Link></li>
        <li><Link to="/sports">Sports</Link></li>
      </ul>
    </nav>
  );
}
