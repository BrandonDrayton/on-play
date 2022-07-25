import React from 'react'
import { Navigate } from 'react-router'
import { useGetCurrentUserQuery } from '../services/createUserApi'

function Protected({ children }) {
  const { data, isUninitialized, isLoading, isFetching, isError } = useGetCurrentUserQuery()

  // checking
  if (isUninitialized || isLoading || isFetching) {
    return null
  }

  // checked & not logged in
  if (!data || isError) {
    return <Navigate to="/login" replace />
  }

  // checked & logged in
  return children
}

export default Protected
