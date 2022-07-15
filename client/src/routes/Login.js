import React from 'react'
import {
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

function Login() {
  return (
    <div>
      <Flex justify={'center'}>
        <Box boxShadow="md" bg="white" w="450px" p={4} m={20} color="black">
          <h1 className="registerHeading">Login</h1>
          <FormControl isRequired>
            <FormLabel className="form" htmlFor="email">
              E-mail
            </FormLabel>
            <Input id="email" placeholder="johndaly123@gmail.com" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel className="form" htmlFor="password">
              Password
            </FormLabel>
            <Input id="password" placeholder="************" />
          </FormControl>
          <Button className="form" mt={4} colorScheme="blackAlpha" size="md">
            Login
          </Button>
        </Box>
      </Flex>
    </div>
  )
}

export default Login
