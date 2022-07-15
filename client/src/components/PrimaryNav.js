import { Link } from 'react-router-dom'
import './PrimaryNav.css'

function PrimaryNav() {
  return (
    <div>
      <div className="navbar">
        <img className="logo" src="/images/logo.png" alt="logo"></img>
        <nav className="links">
          <Link className="link" to="/">
            Dashboard
          </Link>
          <Link className="link" to="/about">
            About Us
          </Link>
          <Link className="link" to="/register">
            Register
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default PrimaryNav
