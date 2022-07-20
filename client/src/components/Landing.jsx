import React, { useState } from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Container, FormControl, Grid, Select } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useGetTeamsQuery } from '../services/createSportsApi'
import Stats from './Stats'
import './PrimaryNav.css'
import Forum from './Forum'

function Dashboard() {
  const sports = ['football', 'baseball']
  const leagues = ['nfl', 'mlb']
  const [sport, setSport] = useState(sports[0])
  const [league, setLeague] = useState(leagues[0])

  const { data, isLoading } = useGetTeamsQuery({ sport, league })

  const teams = data?.sports[0].leagues[0].teams
  if (isLoading) {
    return null
  }
  return (
    <>
      {/* <Box>
        {nflNews.map((team) => (
          <h2>{team.articles}</h2>
        ))}
      </Box> */}
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
            }}
          >
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
          <Select icon={<ChevronDownIcon />} rounded="full" variant="outline" size="md" maxWidth="400px" pr="1">
            {teams?.map((team, i) => (
              <option key={i} value="option1">
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
          <Container>
            <Forum />
          </Container>
          <Grid height={400} />
        </Box>
      </FormControl>
    </>
  )
}

export default Dashboard
