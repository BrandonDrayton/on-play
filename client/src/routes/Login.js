import React, { useState } from 'react'
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Spacer,
} from '@chakra-ui/react'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import LandingNav from '../components/LandingNav'
import { useAddUserLoginMutation } from '../services/createUserApi'

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const updateField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [addUserLogin, isError] = useAddUserLoginMutation()
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')
    addUserLogin(form)
      .unwrap()
      .then(() => {
        setForm({
          email: '',
          password: '',
        })
        setSuccess('Logged in Successfully..?')
        navigate('/')
        setIsLoading(false)
      })
      .catch((e) => {
        setError('Invalid Email or Password')
        navigate('/login')
        setIsLoading(false)
      })
  }

  return (
    <>
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
        <Flex justify={'center'}>
          <Box boxShadow="md" w="450px" p={4} m={20} color="black" className="login-form-card">
            <h1 className="loginHeading">Login</h1>
            <FormControl my="5">
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
              />
            </FormControl>
            <FormControl my="5">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="password"
                required
                value={form.password}
                onChange={(e) => updateField('password', e.target.value)}
              />
            </FormControl>
            <Button type="submit" isLoading={isLoading} mt={4} className="form" colorScheme="blackAlpha" size="md">
              Login
            </Button>
          </Box>
        </Flex>
      </form>
      <Box>
        <Carousel fade controls={false} pause={false} indicators={false} interval={1000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://c.tenor.com/F4-i1leMvrUAAAAd/dunk-slam-dunk.gif"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/1d/65/f0/1d65f0e3d26176ce06025426082485f9.gif"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media4.giphy.com/media/SxMF64Np2fUCMlcUdE/giphy-downsized-large.gif"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media1.giphy.com/media/CxeRpYtRgC836X95ru/giphy.gif"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://c.tenor.com/142oibHgfWwAAAAC/atlanta-united-goal.gif"
              // src="https://wallpapercave.com/wp/wp6819375.jpg"
              alt="Third slide"
            />
          </Carousel.Item> */}
        </Carousel>
      </Box>
    </>
  )
}

export default Login
