import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'

function Logout() {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const handleClick = (e) => {
    setIsLoading(true)
    setError('')
    setSuccess('')
    fetch('/api/v1/users/logout', {
      method: 'GET',
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
  return (
    <>
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
      <div>
        was thinking it would be cool if we could replace the login icon with the logout one after the user signs in,
        similar to what he did with the in class todo project
      </div>
    </>
  )
}

export default Logout
