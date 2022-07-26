import { Accordion, AccordionItem, AccordionPanel, Box, Container, Flex, Image, Text, Textarea } from '@chakra-ui/react'
import './About.css'
function About() {
  return (
    // TODO: Edit About page
    <>
      <Box>
        <Text className="title-intro">Here at onplay</Text>
        <Text className="intro-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eos odit quod, sit accusantium nobis
          perferendis dolores aliquid suscipit doloremque excepturi voluptates veniam reprehenderit earum asperiores
          dolor. Quod, ducimus laboriosam.
        </Text>
      </Box>
      <br></br>
      <br></br>
      <Flex justifyContent="center">
        <div className="about-box">
          <Flex className="dev-outer-div">
            <div className="team-box">
              <Box className="team">Developer Team</Box>
            </div>
            <Box className="title2">
              <Text marginLeft="3em">Michael</Text>
            </Box>
            <Flex>
              <Box className="profile-card" display="flex" flexDirection="row">
                <Image
                  className="profile-image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGpIeluYCR9yvD7ei8EWI_0o_prbbivjosA&usqp=CAU"
                  alt="some guy"
                />
                <div className="text-box">
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eos odit quod, sit accusantium
                    nobis perferendis dolores aliquid suscipit doloremque excepturi voluptates veniam reprehenderit
                    earum asperiores dolor. Quod, ducimus laboriosam.
                  </Text>
                </div>
              </Box>
            </Flex>
            <Box className="title">
              <Text>Chase</Text>
            </Box>
            <Flex>
              <Box className="profile-card" display="flex" flexDirection="row">
                <div className="text-box">
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eos odit quod, sit accusantium
                    nobis perferendis dolores aliquid suscipit doloremque excepturi voluptates veniam reprehenderit
                    earum asperiores dolor. Quod, ducimus laboriosam.
                  </Text>
                </div>
                <Image
                  className="profile-image"
                  src="data:image/jpeg;base64,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"
                  alt="some guy"
                />
              </Box>
            </Flex>
            <Box className="title2">
              <Text marginLeft="3em">Brandon</Text>
            </Box>
            <Flex>
              <Box className="profile-card" display="flex" flexDirection="row">
                <Image
                  className="profile-image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxqBGYFFP9OfKLE2n1TGwRvsCHI2K6fsy6Vg&usqp=CAU"
                  alt="some guy"
                />
                <div className="text-box">
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eos odit quod, sit accusantium
                    nobis perferendis dolores aliquid suscipit doloremque excepturi voluptates veniam reprehenderit
                    earum asperiores dolor. Quod, ducimus laboriosam.
                  </Text>
                </div>
              </Box>
            </Flex>
            <Box className="title">
              <Text>Kyle</Text>
            </Box>
            <Flex>
              <Box className="profile-card" display="flex" flexDirection="row">
                <div className="text-box">
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eos odit quod, sit accusantium
                    nobis perferendis dolores aliquid suscipit doloremque excepturi voluptates veniam reprehenderit
                    earum asperiores dolor. Quod, ducimus laboriosam.
                  </Text>
                </div>
                <Image
                  className="profile-image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfx4vwNo9aInE87FEoUEYbO0V1ipiGK59Lw&usqp=CAU"
                  alt="some guy"
                />
              </Box>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </>
  )
}

export default About
