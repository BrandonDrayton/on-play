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
  WrapItem,
} from '@chakra-ui/react'
import Moment from 'moment'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCurrentUserQuery, useGetUserQuery } from '../services/createUserApi'
import {
  useAddNewCommentMutation,
  useAddNewLikeMutation,
  useAddNewSubCommentMutation,
  useAddNewThreadMutation,
  useGetThreadQuery,
  useGetThreadsQuery,
} from '../services/forumApi'
import './Forum.css'

function ForumModel() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isSecondOpen, onOpen: onSecondOpen, onClose: onSecondClose } = useDisclosure()
  const [addNewComment] = useAddNewCommentMutation()
  const [addNewSubComment] = useAddNewSubCommentMutation()
  const { data: allThreads, isLoading } = useGetThreadsQuery()
  const [addNewThread] = useAddNewThreadMutation()
  const [addnewLike] = useAddNewLikeMutation()
  const [openThread, setOpenThread] = useState()
  const [openComment, setOpenComment] = useState()
  const [isDisabled, setIsDisabled] = useState(false)
  const { data: userData } = useGetCurrentUserQuery()
  const { data: threadData, isLoading: threadDataIsLoading } = useGetThreadQuery(openThread)
  const [count, setCount] = useState(threadData)
  const [form, setForm] = useState({
    text: '',
  })
  const [formComment, setFormComment] = useState({
    body: '',
    createdAt: '',
    parentId: null,
  })
  const [formSubComment, setFormSubComment] = useState({
    body: '',
  })
  console.log(userData)
  const handleSubmit = (e) => {
    e.preventDefault()
    addNewThread(form)
      .unwrap()
      .then(() => {
        setForm({
          text: '',
        })
      })
      .catch((e) => {})
  }
  const handleAddComment = (e) => {
    e.preventDefault()
    addNewComment({ id: openThread, newComment: formComment })
      .unwrap()
      .then(() => {
        setFormComment({
          body: '',
          createdAt: '',
          parentId: null,
        })
        onClose()
      })
      .catch((e) => {})
  }

  const handleAddLike = (threadId, Comment) => {
    addnewLike({ threadId: openThread, commentId: Comment })
      .unwrap()
      .catch((e) => {})
  }

  const handleAddSubComment = (e) => {
    e.preventDefault()
    addNewSubComment({ id: openThread, newSubComment: formComment })
      .unwrap()
      .then(() => {
        setFormSubComment({
          body: '',
        })
        onClose()
      })

      .catch((e) => {})
  }
  const updateField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }
  const updateCommentField = (name, value) => {
    setFormComment({
      ...formComment,
      [name]: value,
    })
  }

  const updateSubCommentField = (name, value) => {
    setFormSubComment({
      ...formSubComment,
      [name]: value,
    })
  }

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const formatDate = Moment().format('MM-DD-YYYY HH:MM')
  const onCommentClick = (id) => {
    onOpen()
    updateCommentField('parentId', id)
  }
  return (
    <>
      <div className="forum-box">
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
              {userData?.Team?.name} Forum
            </Text>
          </Box>
          <AccordionItem className="accordian-title">
            <h2>
              <AccordionButton>
                <Flex justify="space-between">
                  <Flex flexDirection="column" textAlign="left"></Flex>
                </Flex>
                <Button className="thread-comment-button" leftIcon={<ChatIcon />} mt={3} bg="#66CD00" mb="3">
                  Create {userData?.Team?.name} Thread
                </Button>
              </AccordionButton>
            </h2>
            <AccordionPanel display="flex" flexDirection="column" pb={4}>
              <Box boxShadow="md" p="6" rounded="md" bg="white">
                <Flex flexDirection="column"></Flex>
                <form onSubmit={handleSubmit} method="post">
                  <FormControl>
                    <FormLabel>Forum Name:</FormLabel>
                    <Input
                      id="text"
                      type="text"
                      value={form.text}
                      onChange={(e) => updateField('text', e.target.value)}
                    />
                    <Button type="submit" className="thread-comment-button" mt={3} bg="#66CD00">
                      <Text>Submit</Text>
                    </Button>
                  </FormControl>
                </form>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          {isLoading ||
            allThreads?.map((thread) => {
              const currentDate = new Date(thread.createdAt)
              const createAtDate = currentDate.toLocaleString(`en-us`, { dateStyle: `full` })
              const createdAtTime = currentDate.toLocaleString(`en-us`, { timeStyle: `short` })
              const subCommentTime = currentDate.toLocaleString(`en-us`, { dateStyle: `short` })
              return (
                <AccordionItem className="accordian-title">
                  <h2>
                    <AccordionButton onClick={() => setOpenThread(thread.id)}>
                      <Flex justify="space-between">
                        <Flex flexDirection="column" textAlign="left">
                          <Text className="accordian-thread-title">{thread.text}</Text>
                          <Text mt="3">
                            {createAtDate}
                            <br></br>
                            {createdAtTime}
                          </Text>
                        </Flex>
                      </Flex>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel display="flex" flexDirection="column" pb={4}>
                    <Button
                      w="100"
                      ml="4"
                      mb="3"
                      className="thread-comment-button"
                      mt={3}
                      onClick={() => onCommentClick(null)}
                      bg="#66CD00"
                    >
                      <ChatIcon mr="2"></ChatIcon>
                      <Text>Comment</Text>
                    </Button>
                    {threadData?.Comments?.map((Comment) => {
                      console.log(Comment)
                      return (
                        <Box
                          onClick={() => setOpenComment(Comment.id)}
                          key={Comment.id}
                          boxShadow="md"
                          p="6"
                          rounded="md"
                          bg="white"
                          m="3"
                        >
                          <Flex flexDirection="column">
                            <Flex align="center" mb="3">
                              <Avatar name={Comment.name} bg={'#' + Comment.iconColor} src=""></Avatar>
                              <Text ml="3" fontSize="l">
                                {Comment.name}
                              </Text>
                            </Flex>
                            <Box>
                              <Text>{Comment.body}</Text>
                            </Box>
                            <Flex justify="flex-end" align={'center'}>
                              <Flex align="center" mt="2" mr="2">
                                <Flex mr="3">
                                  <ChatIcon
                                    className="icons"
                                    mr="2"
                                    w="4"
                                    height="6"
                                    onClick={() => onCommentClick(Comment.id)}
                                  ></ChatIcon>
                                  <Text mr="2">{Comment.Children?.length ?? 0}</Text>
                                </Flex>
                                <Flex justify="center" mr="3">
                                  <WrapItem>
                                    <Button
                                      isDisabled={Comment.Likes.some((l) => l.UserId === userData.id)}
                                      isActive={Comment.Likes.some((l) => l.UserId !== userData.id)}
                                      onClick={() => handleAddLike(openThread, Comment.id)}
                                      colorScheme="orange"
                                    >
                                      <ArrowUpIcon className="icons" mr="2" w="5" height="6"></ArrowUpIcon>
                                      <Text mr="2">{Comment.Likes.length}</Text>
                                    </Button>
                                  </WrapItem>
                                </Flex>
                              </Flex>
                              <Box>
                                <Text mt="2">
                                  {subCommentTime} {createdAtTime}
                                </Text>
                              </Box>
                            </Flex>
                          </Flex>
                          {Comment.Children.map((Child) => {
                            return (
                              <Flex
                                boxShadow="md"
                                p="6"
                                rounded="md"
                                bg="white"
                                mt="3"
                                w="70%"
                                align="flex-end"
                                key={Child.id}
                              >
                                <Flex flexDirection="column">
                                  <Flex align="center" mb="3">
                                    <Avatar name={userData.name} bg={'#' + userData.iconColor} src=""></Avatar>
                                    <Flex>
                                      <Text ml="3" fontSize="l">
                                        {userData.name}
                                      </Text>
                                    </Flex>
                                  </Flex>
                                  <Flex align="flex-end">
                                    <Text>{Child.body}</Text>
                                  </Flex>
                                  <Flex justify="flex-end" align={'center'}>
                                    <Box>
                                      <Text mt="2">{Child.createdAt}</Text>
                                    </Box>
                                  </Flex>
                                </Flex>
                              </Flex>
                            )
                          })}
                        </Box>
                      )
                    })}
                  </AccordionPanel>
                </AccordionItem>
              )
            })}
        </Accordion>
        <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Flex flexDirection="column">
                <Box>
                  <Text>Add Comment</Text>
                </Box>
              </Flex>
            </ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleAddComment}>
              <ModalBody>
                <Textarea
                  value={formComment.body}
                  height={250}
                  placeholder="Type comment here"
                  fontFamily="Poppins"
                  fontSize="20px"
                  onChange={(e) => updateCommentField('body', e.target.value)}
                ></Textarea>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" bg="#66CD00" mr={3}>
                  Send it
                </Button>
                <Button onClick={onClose} variant="ghost">
                  Cancel
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
        <Modal size="xl" isOpen={isSecondOpen} onClose={onClose} isCentered>
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
            <form onSubmit={handleAddSubComment}>
              <ModalBody>
                <Textarea
                  value={formSubComment.body}
                  height={250}
                  placeholder="Type comment here"
                  fontFamily="Poppins"
                  fontSize="20px"
                  onChange={(e) => updateSubCommentField('body', e.target.value)}
                ></Textarea>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" bg="#66CD00" mr={3}>
                  Send it
                </Button>
                <Button onClick={onClose} variant="ghost">
                  Cancel
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </div>
    </>
  )
}

export default ForumModel
