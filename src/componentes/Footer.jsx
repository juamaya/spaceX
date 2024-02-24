import React from 'react'
import { Heading, Center } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Center bg='blue.900' color='white' >
      <Heading as="h1" size='md' my="5" >JUAMAYA @ {new Date().getFullYear()}</Heading>
    </Center>

  )
}

export default Footer