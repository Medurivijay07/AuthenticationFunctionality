// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="links-list">
    <Link to="/" className="link-item">
      <li>Home</li>
    </Link>
    <Link to="/about">
      <li>About</li>
    </Link>
  </ul>
)

export default Header
