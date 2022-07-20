import { ArrowUpIcon, ChatIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import './Forum.css'

function ForumModel() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
    <>
      <Accordion
        defaultIndex={[0]}
        allowToggle
        className="forum-container"
        boxShadow="lg"
        rounded="md"
        bg="blackAlpha.100"
      >
        <Box>
          <Text className="forumheading" fontSize="3xl" align="center" mb="4" color="white" bg="black" p="4">
            SPORTS FORUM
          </Text>
        </Box>
        <AccordionItem className="accordian-title">
          <h2>
            <AccordionButton>
              <Flex justify="space-between">
                <Flex flexDirection="column" textAlign="left"></Flex>
              </Flex>
              <Button className="thread-comment-button" mt={3} bg="#66CD00">
                <ChatIcon mr="2"></ChatIcon>
                <Text>Create New Forum</Text>
              </Button>
            </AccordionButton>
          </h2>
          <AccordionPanel display="flex" flexDirection="column" pb={4}>
            <Box boxShadow="md" p="6" rounded="md" bg="white">
              <Flex flexDirection="column"></Flex>
              <form method="post">
                <FormControl>
                  <FormLabel>Forum Name:</FormLabel>
                  <Input type="text" />
                </FormControl>
              </form>
            </Box>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="accordian-title">
          <h2>
            <AccordionButton>
              <Flex justify="space-between">
                <Flex flexDirection="column" textAlign="left">
                  <Text className="accordian-thread-title">
                    ESPN Just Gave Justin Fields Even More Reasons To Crush 2022
                  </Text>
                  <Text mt="3">Aug 1st, 2022, 10:08 AM</Text>
                </Flex>
                <Box>
                  <AccordionIcon />
                </Box>
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel display="flex" flexDirection="column" pb={4}>
            <Button className="thread-comment-button" mt={3} onClick={onOpen} bg="#66CD00">
              <ChatIcon mr="2"></ChatIcon>
              <Text>Comment</Text>
            </Button>
            <Box boxShadow="md" p="6" rounded="md" bg="white">
              <Flex flexDirection="column">
                <Flex align="center" mb="3">
                  <Avatar></Avatar>
                  <Flex>
                    <Text ml="3">Chase Childers</Text>
                  </Flex>
                </Flex>
                <Box>
                  <Text>
                    It amuses me that a tournament with DJ, Mickelson, Koepka, DeChambeau, Reed, Wolff, Kaymer and
                    Oosthuizen is a “piss weak and poor tournament”, yet if it was PGA Tour Event people would call it a
                    “strong field”
                  </Text>
                </Box>
                <Flex justify="flex-end" align={'center'}>
                  <Flex align="center">
                    <ArrowUpIcon mr="5" w="6" height="6"></ArrowUpIcon>
                  </Flex>
                  <Box>
                    <Text mt="2">Aug 13th, 2019, 12:08 AM</Text>
                  </Box>
                </Flex>
              </Flex>
              <form method="post">
                <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>
                      <Flex flexDirection="column">
                        <Box>
                          <Text>ESPN Just Gave Justin Fields Even More Reasons To Crush 2022</Text>
                        </Box>
                        <Box>
                          <Text fontSize="sm" mt="3">
                            Aug 13th, 2019, 10:08 AM
                          </Text>
                        </Box>
                      </Flex>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Textarea
                        height={250}
                        placeholder="Type comment here"
                        fontFamily="Poppins"
                        fontSize="20px"
                      ></Textarea>
                    </ModalBody>

                    <ModalFooter>
                      <form>
                        <Button bg="#66CD00" mr={3}>
                          Send it
                        </Button>
                        <Button onClick={onClose} variant="ghost">
                          Cancel
                        </Button>
                      </form>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </form>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default ForumModel
