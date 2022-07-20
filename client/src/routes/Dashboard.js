import ForumModel from '../components/ForumModel'
import Landing from '../components/Landing'
import Stats from '../components/Stats'
import '../components/Forum.css'
import News from '../components/News'
import PrimaryNav from '../components/PrimaryNav'

function Dashboard() {
  return (
    // TODO: Make Homepage
    <>

      <PrimaryNav />
      <h3>dashboard</h3>

      <Landing />
      {/* <News /> */}
      <ForumModel />
    </>
  )
}

export default Dashboard
