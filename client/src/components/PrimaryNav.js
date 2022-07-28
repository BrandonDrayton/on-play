import { Link, Navigate, useNavigate } from 'react-router-dom'
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  extendTheme,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { useGetTeamsQuery } from '../services/createSportsApi'
import './PrimaryNav.css'
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons'
import { useAddUserLogoutMutation, useGetCurrentUserQuery } from '../services/createUserApi'
import { useState } from 'react'

function PrimaryNav() {
  const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
  const navigate = useNavigate()
  const { data, isUninitialized, isFetching, refetch } = useGetCurrentUserQuery()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [addUserLogout, isError] = useAddUserLogoutMutation()
  const [form, setForm] = useState({
    email: data?.email,
    password: data?.password,
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')
    addUserLogout(form)
      .unwrap()
      .then(() => {
        setForm({
          email: null,
          password: null,
        })
        setSuccess('Logged out Successfully..?')
        navigate('/login')
        setIsLoading(false)
      })
      .catch((e) => {
        setError('Invalid Email or Password')
        navigate('/logout')
        setIsLoading(false)
      })
  }
  if (!data) {
    return <Navigate to="/login" replace />
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
              _focus={null}
              colorScheme="black"
              _hover={{ bg: 'greenyellow' }}
            />
            <MenuList bg={'black'} border={'none'}>
              <MenuItem className="menu-links" _hover={{ bg: 'none' }}>
                <Link className="link" to="/">
                  Dashboard
                </Link>
              </MenuItem>
              <MenuItem className="menu-links" _hover={{ bg: 'none' }}>
                <Link className="link" to="/about">
                  About Us
                </Link>
              </MenuItem>
              <MenuItem className="menu-links logout-button-on-drop" _hover={{ bg: 'none' }}>
                {/* <Link className="link" to="/logout">
                  Logout
                </Link> */}
                <form onSubmit={handleSubmit}>
                  {error && (
                    <Alert status="error">
                      <AlertIcon /> {error}
                    </Alert>
                  )}
                  {success && (
                    <Alert status="success">
                      <AlertIcon /> {success}
                    </Alert>
                  )}
                  <Button
                    type="submit"
                    isLoading={isLoading}
                    mt={4}
                    className="form logout-button-on-drop"
                    colorScheme="blackAlpha"
                    size="md"
                  >
                    Logout
                  </Button>
                </form>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <nav className="links">
          <form onSubmit={handleSubmit}>
            <Link className="link" to="/">
              Dashboard
            </Link>
            <Link className="link" to="/about">
              About Us
            </Link>
            {/* <Link className="link" to="/logout">
            Logout
          </Link> */}
            {error && (
              <Alert status="error">
                <AlertIcon /> {error}
              </Alert>
            )}
            {success && (
              <Alert status="success">
                <AlertIcon /> {success}
              </Alert>
            )}
            <Button
              type="submit"
              isLoading={isLoading}
              mt={4}
              className="form logout-button"
              colorScheme="blackAlpha"
              size="md"
            >
              Logout
            </Button>
          </form>
        </nav>
      </div>
    </>
  )
}

export default PrimaryNav
