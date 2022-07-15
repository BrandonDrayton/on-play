import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Grid, Select } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  useGetMlbTeamsQuery,
  useGetMlsTeamsQuery,
  useGetNbaTeamsQuery,
  useGetNhlTeamsQuery,
  useGetTeamsQuery,
} from '../services/createSportsApi'
import './PrimaryNav.css'

function PrimaryNav() {
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
      <div className="navbar">
        <img className="logo" src="/images/logo.png" alt="logo"></img>
        <nav className="links">
          <Link className="link" to="/">
            Dashboard
          </Link>
          <Link className="link" to="/about">
            About Us
          </Link>
          <Link className="link" to="/register">
            Register
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
        </nav>
      </div>
      <Box display="flex">
        <Select
          icon={<ChevronDownIcon />}
          variant="outline"
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
          <option value="nhl" data-sport="hockey">
            NHL
          </option>
          <option value="mlb" data-sport="baseball">
            MLB
          </option>
          <option value="usa.1" data-sport="soccer">
            MLS
          </option>
          <option value="nba" data-sport="basketball">
            NBA
          </option>
        </Select>
        <Select icon={<ChevronDownIcon />} variant="outline" size="md">
          {teams?.map((team, i) => (
            <option key={i} value="option1">
              {team.team.name}
            </option>
          ))}
        </Select>

        <Button variant="solid" size="md" display="flex" flexDirection="column" fontSize="sm">
          Select
        </Button>
      </Box>
      <Box display="flex" width={100}>
        <Container width={40} height={300} />
        <Container width={40} height={300} />
        <Container width={40} height={300} />
        <Container width={40} height={300} />
        <Container width={40} height={300} />
        <Container width={40} height={300} />
      </Box>
      <Box>
        <Grid height={400} />
      </Box>
    </>
  )
}

export default PrimaryNav
