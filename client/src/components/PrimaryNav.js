import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Grid, Select } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {
  useGetMlbTeamsQuery,
  useGetMlsTeamsQuery,
  useGetNbaTeamsQuery,
  useGetNflTeamsQuery,
  useGetNhlTeamsQuery,
} from '../services/createSportsApi'
import './PrimaryNav.css'

function PrimaryNav(props) {
  const { data, isLoading } = useGetMlbTeamsQuery('')
  const { data: mlsData } = useGetMlsTeamsQuery('')
  const { data: nbaData } = useGetNbaTeamsQuery('')
  const { data: nflData } = useGetNflTeamsQuery('')
  const { data: nhlData } = useGetNhlTeamsQuery('')

  const nflTeams = nflData?.sports[0].leagues[0].teams
  const mlbTeams = data?.sports[0].leagues[0].teams
  const nhlTeams = nhlData?.sports[0].leagues[0].teams
  const mlsTeams = mlsData?.sports[0].leagues[0].teams
  const nbaTeams = nbaData?.sports[0].leagues[0].teams
  const leagues = data?.sports.leagues
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
          <option value={nflTeams}>NFL</option>
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
