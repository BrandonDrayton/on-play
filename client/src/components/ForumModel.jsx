import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  FormControl,
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
      <Box>
        <Text>
          <h1 className="forum-title">Sports Forum</h1>
        </Text>
      </Box>
      <Accordion defaultIndex={[0]} allowToggle className="forum-container">
        <AccordionItem className="accordian-title">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <h1 className="accordian-thread-title">Lebron goes to south beach</h1>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel display="flex" flexDirection="column" pb={4}>
            <Button className="thread-comment-button" mt={3} onClick={onOpen}>
              Add Comment
            </Button>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius, alias deserunt tempore corporis non
              minima, corrupti adipisci ratione magnam ad, aut odit esse quis perspiciatis consequatur dolorem
              voluptatum tempora.
            </Box>
            <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader textAlign="center">Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Textarea
                    height={250}
                    placeholder="Enter your message here troll.."
                    borderColor="green"
                    fontFamily="Poppins"
                    fontSize="20px"
                  ></Textarea>
                </ModalBody>

                <ModalFooter>
                  <form>
                    <Button colorScheme="orange" mr={3}>
                      Send it
                    </Button>
                    <Button onClick={onClose} variant="ghost">
                      Cancel
                    </Button>
                  </form>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="accordian-title">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <h1 className="accordian-thread-title">Lebron goes to south beach</h1>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel display="flex" flexDirection="column" pb={4}>
            <Button className="thread-comment-button" mt={3} onClick={onOpen}>
              Add Comment
            </Button>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius, alias deserunt tempore corporis non
              minima, corrupti adipisci ratione magnam ad, aut odit esse quis perspiciatis consequatur dolorem
              voluptatum tempora.
            </Box>

            <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader textAlign="center">Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Textarea
                    height={250}
                    placeholder="Enter your message here troll.."
                    borderColor="green"
                    fontFamily="Poppins"
                    fontSize="20px"
                  ></Textarea>
                </ModalBody>

                <ModalFooter>
                  <form>
                    <Button colorScheme="orange" mr={3}>
                      Send it
                    </Button>
                    <Button onClick={onClose} variant="ghost">
                      Cancel
                    </Button>
                  </form>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="accordian-title">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <h1 className="accordian-thread-title">Lebron goes to south beach</h1>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel display="flex" flexDirection="column" pb={4}>
            <Button className="thread-comment-button" mt={3} onClick={onOpen}>
              Add Comment
            </Button>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius, alias deserunt tempore corporis non
              minima, corrupti adipisci ratione magnam ad, aut odit esse quis perspiciatis consequatur dolorem
              voluptatum tempora.
            </Box>

            <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader textAlign="center">Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Textarea
                    height={250}
                    placeholder="Enter your message here troll.."
                    borderColor="green"
                    fontFamily="Poppins"
                    fontSize="20px"
                  ></Textarea>
                </ModalBody>

                <ModalFooter>
                  <form>
                    <Button colorScheme="orange" mr={3}>
                      Send it
                    </Button>
                    <Button onClick={onClose} variant="ghost">
                      Cancel
                    </Button>
                  </form>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="accordian-title">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <h1 className="accordian-thread-title">Lebron goes to south beach</h1>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel display="flex" flexDirection="column" pb={4}>
            <Button className="thread-comment-button" mt={3} onClick={onOpen}>
              Add Comment
            </Button>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius, alias deserunt tempore corporis non
              minima, corrupti adipisci ratione magnam ad, aut odit esse quis perspiciatis consequatur dolorem
              voluptatum tempora.
            </Box>

            <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader textAlign="center">Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Textarea
                    height={250}
                    placeholder="Enter your message here troll.."
                    borderColor="green"
                    fontFamily="Poppins"
                    fontSize="20px"
                  ></Textarea>
                </ModalBody>

                <ModalFooter>
                  <form>
                    <Button colorScheme="orange" mr={3}>
                      Send it
                    </Button>
                    <Button onClick={onClose} variant="ghost">
                      Cancel
                    </Button>
                  </form>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="accordian-title">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <h1 className="accordian-thread-title">Lebron goes to south beach</h1>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel display="flex" flexDirection="column" pb={4}>
            <Button className="thread-comment-button" mt={3} onClick={onOpen}>
              Add Comment
            </Button>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius, alias deserunt tempore corporis non
              minima, corrupti adipisci ratione magnam ad, aut odit esse quis perspiciatis consequatur dolorem
              voluptatum tempora.
            </Box>

            <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader textAlign="center">Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Textarea
                    height={250}
                    placeholder="Enter your message here troll.."
                    borderColor="green"
                    fontFamily="Poppins"
                    fontSize="20px"
                  ></Textarea>
                </ModalBody>

                <ModalFooter>
                  <form>
                    <Button colorScheme="orange" mr={3}>
                      Send it
                    </Button>
                    <Button onClick={onClose} variant="ghost">
                      Cancel
                    </Button>
                  </form>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default ForumModel
