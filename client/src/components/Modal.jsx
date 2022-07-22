// import React from 'react'
// import {
//     Accordion,
//     AccordionButton,
//     AccordionIcon,
//     AccordionItem,
//     AccordionPanel,
//     Avatar,
//     Box,
//     Button,
//     Flex,
//     FormControl,
//     FormHelperText,
//     FormLabel,
//     Input,
//     Modal,
//     ModalBody,
//     ModalCloseButton,
//     ModalContent,
//     ModalFooter,
//     ModalHeader,
//     ModalOverlay,
//     Text,
//     Textarea,
//     useDisclosure,
//   } from '@chakra-ui/react'
//   const updateCommentField = (name, value) => {
//     setFormComment({
//       ...formComment,
//       [name]: value,
//     })
//   }
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const [addNewComment] = useAddNewCommentMutation()
//   const { data: allThreads, isLoading } = useGetThreadsQuery()
//   const [openComment, setOpenComment] = useState()
//   const handleAddComment = (e) => {
//     e.preventDefault()
//     addNewComment(formComment)
//       .unwrap()
//       .then(() => {
//         setFormComment({
//           body: '',
//           createdAt: '',
//         })
//       })
//       .catch((e) => {})
//   }
// function Modal() {
//   return (
//     <div>
//       <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>
//             <Flex flexDirection="column">
//               <Box>
//                 <Text>ESPN Just Gave Justin Fields Even More Reasons To Crush 2022</Text>
//               </Box>
//               <Box>
//                 <Text fontSize="sm" mt="3">
//                   Aug 13th, 2019, 10:08 AM
//                 </Text>
//               </Box>
//             </Flex>
//           </ModalHeader>
//           <ModalCloseButton />
//           <form onSubmit={handleAddComment}>
//             <ModalBody>
//               <Textarea height={250} placeholder="Type comment here" fontFamily="Poppins" fontSize="20px"></Textarea>
//             </ModalBody>
//             <ModalFooter>
//               <Button type="submit" bg="#66CD00" mr={3}>
//                 Send it
//               </Button>
//               <Button onClick={onClose} variant="ghost">
//                 Cancel
//               </Button>
//             </ModalFooter>
//           </form>
//         </ModalContent>
//       </Modal>
//     </div>
//   )
// }

// export default Modal
