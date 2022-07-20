import React, { useState } from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Alert, AlertIcon, Box, Button, Container, FormControl, Grid, Select, Spinner } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useGetTeamsQuery } from '../services/createSportsApi'
import Stats from './Stats'
import './PrimaryNav.css'

import ForumModel from './ForumModel'
import './Forum.css'

function Dashboard() {
  const sports = ['football', 'baseball']
  const leagues = ['nfl', 'mlb']
  const [sport, setSport] = useState('')
  const [league, setLeague] = useState('')
  const [team, setTeam] = useState('')
  const [espnTeamId, setEspnTeamId] = useState('')
  const { data, isLoading } = useGetTeamsQuery({ sport, league })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    fetch('/api/v1/users/favorite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ team, sport, league, espnTeamId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          setSuccess('Team chosen successfully')
        }
      })
  }

  const teams = data?.sports[0].leagues[0].teams
  if (isLoading) {
    return <Spinner />
  }
  return (
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
      <FormControl>
        <Box display="flex" justifyContent="center">
          <Select
            icon={<ChevronDownIcon />}
            variant="outline"
            rounded="full"
            maxWidth="200px"
            pr="2"
            size="md"
            value={league}
            onChange={(e) => {
              setLeague(e.target.value)
              setSport(e.target.selectedOptions[0].dataset.sport)
              setTeam('')
              setEspnTeamId('')
            }}
          >
            <option value="" disabled selected>
              Please Select A League
            </option>
            <option value="nfl" data-sport="football">
              NFL
            </option>
            <option value="nba" data-sport="basketball">
              NBA
            </option>
            <option value="mlb" data-sport="baseball">
              MLB
            </option>
            <option value="nhl" data-sport="hockey">
              NHL
            </option>
            <option value="usa.1" data-sport="soccer">
              MLS
            </option>
          </Select>
          <Select
            value={team}
            onChange={(e) => {
              setTeam(e.target.value)
              setEspnTeamId(e.target.selectedOptions[0].dataset.id)
            }}
            icon={<ChevronDownIcon />}
            rounded="full"
            variant="outline"
            size="md"
            maxWidth="400px"
            pr="1"
          >
            <option value="" disabled selected>
              Please Select A Team
            </option>
            {teams?.map((team, i) => (
              <option key={i} value={team.team.name} data-id={team.team.id}>
                {team.team.name}
              </option>
            ))}
          </Select>

          <Button
            variant="solid"
            size="md"
            display="flex"
            flexDirection="column"
            fontSize="sm"
            type="submit"
            rounded="full"
            bg="#66CD00"
          >
            Select
          </Button>
          <Stats />
        </Box>
        <Box>
          <Container></Container>
          <Grid height={400} />
        </Box>
      </FormControl>
    </form>
  )
}

export default Dashboard
