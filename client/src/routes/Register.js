import React, { useState } from 'react'
import './Register.css'
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Collapse,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import LandingNav from '../components/LandingNav'
import PrimaryNav from '../components/PrimaryNav'
import { useAddUserRegisterMutation } from '../services/createUserApi'

function Register() {
  const [color, setColor] = useState('#FF0000')
  const { isOpen, onToggle } = useDisclosure()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    // username: '',
    iconColor: '66CD00',
  })
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [addUserRegister] = useAddUserRegisterMutation()
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')
    addUserRegister(form)
      .unwrap()
      .then(() => {
        setForm({
          name: '',
          email: '',
          password: '',
          // username: '',
          iconColor: '',
        })
        setSuccess('Registered Successfully')
        navigate('/login')
        setIsLoading(false)
      })
      .catch((e) => {
        setError('Email is taken')
        navigate('/register')
        setIsLoading(false)
      })
  }
  const updateField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="slam-dunk">
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
          <Box boxShadow="md" w="450px" p={4} m={20} color="black" className="register-form-card">
            <h1 className="registerHeading">Register</h1>
            <FormControl my="5">
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                type="name"
                required
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
              />
            </FormControl>
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
            {/* <FormControl my="5">
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                type="username"
                required
                value={form.username}
                onChange={(e) => updateField('username', e.target.value)}
              />
            </FormControl> */}
            <FormControl w="70px" flexShrink="0">
              <FormLabel htmlFor="color">Avatar Color</FormLabel>
              <Input
                isRequired
                id="color"
                type="color"
                value={'#' + form.iconColor}
                onChange={(e) => updateField('iconColor', e.target.value.slice(1))}
              />{' '}
            </FormControl>
            <Button type="submit" isLoading={isLoading} mt={4} className="form" colorScheme="blackAlpha" size="md">
              Register
            </Button>
          </Box>
        </Flex>
      </form>
    </>
  )
}

export default Register
