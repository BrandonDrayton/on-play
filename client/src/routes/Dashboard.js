import ForumModel from '../components/ForumModel'
import Landing from '../components/Landing'
import Stats from '../components/Stats'
import '../components/Forum.css'
import News from '../components/News'

function Dashboard() {
  return (
    // TODO: Make Homepage
    <>
      <h3>dashboard</h3>
      <Landing />
      <Stats />
      <ForumModel />
      <News />
    </>
  )
}

export default Dashboard
