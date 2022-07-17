import { Link } from 'react-router-dom'
import './PrimaryNav.css'

function PrimaryNav() {
  return (
    <>
      <div className="navbar">
        <Link className="link" to="/">
          <img className="logo" src="/images/logo.png" alt="logo"></img>
        </Link>
        <nav className="links">
          <Link className="link" to="/Dashboard">
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
          <Link className="link" to="/logout">
            Logout
          </Link>
        </nav>
      </div>
    </>
  )
}

export default PrimaryNav
