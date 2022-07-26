import React, { useState } from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Alert, AlertIcon, Box, Button, Container, FormControl, Grid, Select, Spinner } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useGetTeamsQuery } from '../services/createSportsApi'
import Stats from './Stats'
import './PrimaryNav.css'
import ForumModel from './ForumModel'
import './Forum.css'
import News from './News'

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

  let teams = data?.sports[0].leagues[0].teams
  // setTeam(teams.sort((a, b) => a.name.localeCompare(b.name)))

  // console.log(teams)
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
      <FormControl mt="5" mb="5">
        <Box className="drop-down-selector" display="flex" justifyContent="center">
          <div className="drop-down-league">
            <Select
              icon={<ChevronDownIcon />}
              variant="outline"
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
                Select A League
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
          </div>
          <div className="drop-down-team">
            <Select
              value={team}
              onChange={(e) => {
                setTeam(e.target.value)
                setEspnTeamId(e.target.selectedOptions[0].dataset.id)
              }}
              icon={<ChevronDownIcon />}
              variant="outline"
              size="md"
              className="drop-down-team"
              maxWidth="400px"
              pr="1"
              ml="3"
            >
              <option value="" disabled selected>
                Select A Team
              </option>
              {teams?.map((team, i) => (
                <option key={i} value={team.team.name} data-id={team.team.id}>
                  {team.team.displayName}
                </option>
              ))}
            </Select>
          </div>

          <Button
            ml="3"
            variant="solid"
            size="md"
            className="drop-down-button"
            display="flex"
            flexDirection="column"
            fontSize="sm"
            type="submit"
            bg="#66CD00"
          >
            Select
          </Button>
          {/* <Stats /> */}
        </Box>

        <Box>
          {/* <Grid height={400} /> */}
          <News />
        </Box>
      </FormControl>
    </form>
  )
}

export default Dashboard
