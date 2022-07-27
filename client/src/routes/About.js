import { Accordion, AccordionItem, AccordionPanel, Box, Container, Flex, Image, Text, Textarea } from '@chakra-ui/react'
import './About.css'
function About() {
  return (
    // TODO: Edit About page
    <>
      <Box className="about-us-body">
        <Text className="title-intro about-us-body">Here at onplay</Text>
        <Text className="intro-text">
          Choose your favorite sport, select your favorite team, read up on the latest news, and discuss all things
          sports.
        </Text>
      </Box>
      <Flex justifyContent="center" className="about-us-body body">
        <div className="about-box">
          <Flex className="dev-outer-div">
            <div className="team-box">
              <Box className="team">Developer Team</Box>
            </div>
            <Box className="title2">
              <Text marginLeft="3em" className="social-container">
                Michael{' '}
                <Box className="social-flex">
                  <a className="social-links" href="https://github.com/michael263286" target="_blank" rel="noreferrer">
                    Github
                  </a>{' '}
                  <a
                    className="social-links"
                    href="https://michaels-portfolio.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portfolio
                  </a>
                </Box>
              </Text>
            </Box>
            <Flex>
              <Box className="profile-card" display="flex">
                <Image className="profile-image" src="./images/michael.jpg" alt="some guy" />
                <div className="text-box">
                  <Text className="text-box-text">
                    <p>
                      I am a web developer who enjoys creating and implementing different technologies to build
                      beautiful websites. Learning to solve problems and pushing limits is not new territory for me. I
                      believe with the right mindset, you can experience growth in all facets of your life. Solving one
                      problem can trickle down and solve all your other problems.
                    </p>
                  </Text>
                </div>
              </Box>
            </Flex>
            <Box className="title2">
              <Text marginLeft="3em" className="social-container-reverse">
                Chase{' '}
                <Box className="social-flex">
                  <a className="social-links" href="https://github.com/ChaseChilders" target="_blank" rel="noreferrer">
                    Github
                  </a>{' '}
                  <a
                    className="social-links"
                    href="https://chasechildersdev.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portfolio
                  </a>
                </Box>
              </Text>
            </Box>
            <Flex>
              <Box className="profile-card kyle-chase" display="flex">
                <div className="text-box">
                  <Text className="text-box-text">
                    <p>
                      I am a 24 year-old Software Engineer from Swan Point, Maryland with a passion for building
                      beautiful and efficient websites. I am a former collegiate golfer and love all things sports. This
                      was an awesome project to work on, not only because it focused on a topic I love, but also because
                      it tested all of our knowledge when it comes to Full-Stack Development.
                    </p>
                  </Text>
                </div>
                <Image
                  className="profile-image"
                  src="https://avatars.githubusercontent.com/u/58739498?v=4"
                  alt="some guy"
                />
              </Box>
            </Flex>
            <Box className="title2">
              <Text marginLeft="3em" className="social-container">
                Brandon
                <Box className="social-flex brandon">
                  <a className="social-links" href="/images/brandon.jpeg" target="_blank" rel="noreferrer">
                    Github
                  </a>{' '}
                  <a
                    className="social-links"
                    href="https://gregarious-raindrop-1c6552.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portfolio
                  </a>
                </Box>
              </Text>
            </Box>
            <Flex>
              <Box className="profile-card" display="flex">
                <Image className="profile-image" src="./images/brandon.jpeg" alt="some guy" />
                <div className="text-box">
                  <Text className="text-box-text">
                    I am an Army veteran and graduate of the Digital Crafts Full Stack Web Developer in Atlanta. I have
                    the self-discipline, skill-set, and work ethic necessary to complete any task. I gravitated toward
                    this field because it offered an endless journey of learning.
                  </Text>
                </div>
              </Box>
            </Flex>
            <Box className="title2">
              <Text marginLeft="3em" className="social-container-reverse">
                Kyle
                <Box className="social-flex">
                  <a className="social-links" href="https://github.com/kdhuskey" target="_blank" rel="noreferrer">
                    Github
                  </a>{' '}
                  <a
                    className="social-links"
                    href="https://kdhuskey-portfolio.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portfolio
                  </a>
                </Box>
              </Text>
            </Box>
            <Flex>
              <Box className="profile-card kyle-chase" display="flex">
                <div className="text-box">
                  <Text className="text-box-text">
                    I'm Kyle Huskey a new junior developer. With my son being born last fall, I realized that it was
                    time for a new career to provide a better work life balance. I've always been fascinated by
                    technology and have a passion for learning new skills. I found all of that and even more in the
                    world of tech! This was a fun yet challenging project that tested patience with finding the right
                    API's to use and incorporating the comments.
                  </Text>
                </div>
                <Image className="profile-image" src="./images/kyle.JPG" alt="some guy" />
              </Box>
            </Flex>
          </Flex>
        </div>
      </Flex>
      <Box className="footer"></Box>
    </>
  )
}

export default About
