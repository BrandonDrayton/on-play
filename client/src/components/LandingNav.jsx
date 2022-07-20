import { Link } from 'react-router-dom'
import { useGetTeamsQuery } from '../services/createSportsApi'
import './PrimaryNav.css'

function LandingNav() {
  return (
    <>
      <div className="navbar">
        <Link className="link" to="/">
          <img className="logo" src="/images/logo.png" alt="logo"></img>
        </Link>
        <nav className="links">
          <Link className="link" to="/register">
            Register
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
        </nav>
      </div>
    </>
  )
}

export default LandingNav
