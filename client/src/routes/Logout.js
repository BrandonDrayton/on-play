import { Alert, AlertIcon, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAddUserLogoutMutation, useGetCurrentUserQuery } from '../services/createUserApi'
function Logout() {
  const navigate = useNavigate()
  const { data, isUninitialized, isFetching } = useGetCurrentUserQuery()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [addUserLogout, isError] = useAddUserLogoutMutation()
  const [form, setForm] = useState({
    email: data.email,
    password: data.password,
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
        setSuccess('Logged in Successfully..?')
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
        <Button type="submit" isLoading={isLoading} mt={4} className="form" colorScheme="blackAlpha" size="md">
          Logout
        </Button>
      </form>
      <div>
        was thinking it would be cool if we could replace the login icon with the logout one after the user signs in,
        similar to what he did with the in class todo project
      </div>
    </>
  )
}

export default Logout
