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
      <Accordion defaultIndex={[0]} allowToggle className="accordian-grow">
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
            <Button className="thread-comment-button" mt={3}>
              Add comment
            </Button>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
            <br></br>
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
            <Button className="thread-comment-button" mt={3}>
              Add comment
            </Button>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
            <br></br>
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
            <Button className="thread-comment-button" mt={3}>
              Add comment
            </Button>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
            <br></br>
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
            <Button className="thread-comment-button" mt={3}>
              Add comment
            </Button>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
            <br></br>
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
            <Button className="thread-comment-button" mt={3}>
              Add comment
            </Button>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
            <br></br>
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
            <Button className="thread-comment-button" mt={3}>
              Add comment
            </Button>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
            <br></br>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default ForumModel
