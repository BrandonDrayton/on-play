import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Grid, Select } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useGetTeamsQuery } from '../services/createSportsApi'
import './PrimaryNav.css'

function PrimaryNav() {
  const { data, isLoading } = useGetTeamsQuery('')
  const nflTeams = data?.sports[0].leagues[0].teams
  const leagues = data?.sports.leagues
  console.log(leagues)
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
        <Select icon={<ChevronDownIcon />} variant="outline" size="md">
          <option value="option1">NFL</option>
          <option value="option3">NHL</option>
          <option value="option2">MLB</option>
          <option value="option3">MLS</option>
          <option value="option3">PGA</option>
          <option value="option3">NBA</option>
        </Select>
        <Select icon={<ChevronDownIcon />} variant="outline" size="md">
          {nflTeams.map((team, i) => (
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
