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
import LandingNav from '../components/LandingNav'
import { useAddUserLoginMutation, useGetUserLoginQuery } from '../services/createUserApi'

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
  const { data: user } = useGetUserLoginQuery()
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
        navigate('/dashboard')
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
      {/* <LandingNav /> */}
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
          <Box boxShadow="md" bg="white" w="450px" p={4} m={20} color="black">
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
    </>
  )
}

export default Login
