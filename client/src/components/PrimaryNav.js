import { Link } from 'react-router-dom'
import { Box, extendTheme, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useGetTeamsQuery } from '../services/createSportsApi'
import './PrimaryNav.css'
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons'

function PrimaryNav() {
  const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
  const theme = extendTheme({ breakpoints })
  return (
    <>
      <div className="navbar">
        <Link className="link" to="/">
          <Flex>
            <img className="logo" src="/images/logo.png" alt="logo"></img>
          </Flex>
        </Link>
        <Box className="menu-icon-drop-down">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              className="menu-drop-down"
            />
            <MenuList>
              <MenuItem className="menu-links">
                <Link className="link" to="/dashboard">
                  Dashboard
                </Link>
              </MenuItem>
              <MenuItem className="menu-links">
                <Link className="link" to="/about">
                  About Us
                </Link>
              </MenuItem>
              <MenuItem className="menu-links">
                <Link className="link" to="/register">
                  Register
                </Link>
              </MenuItem>
              <MenuItem className="menu-links">
                <Link className="link" to="/login">
                  Login
                </Link>
              </MenuItem>
              <MenuItem className="menu-links">
                <Link className="link" to="/logout">
                  Logout
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <nav className="links">
          <Link className="link" to="/dashboard">
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
