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
  const handleClick = (e) => {
    setIsLoading(true)
    setError('')
    setSuccess('')
    fetch('/api/v1/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false)
        if (data.error) {
          setError(data.error)
        } else {
          setSuccess('Logged out Successfully')
        }
      })
  }
  const [form, setForm] = useState({
    email: '',
    password: '',
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
          email: '',
          password: '',
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
        <Button
          type="submit"
          isLoading={isLoading}
          onClick={handleClick}
          mt={4}
          className="form"
          colorScheme="blackAlpha"
          size="md"
        >
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
