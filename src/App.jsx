import React from 'react'
import { useEffect, useState } from "react";

import * as API from "./services/launches";
import logo from './assets/logo.jpg'

import Footer from './componentes/Footer'
import Imagen from './componentes/Imagen'
import Detalles from './componentes/Detalles'

import { Heading, Box, Image, Flex, Text, Spacer, Tag, Container, Center } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'

import { HiCalendar, HiCheck, HiX } from "react-icons/hi";
import { BiAtom } from "react-icons/bi";

export function App() {

  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>

      <Container maxW='100%' bg='blue.600'>

        <Image src={logo} alt="spaceX" width={500} mx="auto" p="5" />

        <Center bg='blue.900' h='100px' color='white' borderRadius="lg" >
          <Heading as="h1" size='3xl' my="5" >SpaceX Launches</Heading>
        </Center>

        <Grid templateColumns='repeat(3, 1fr)' >
          {launches.map(launch =>
            <Box bg="gray.400" p="4" m={5} borderRadius="lg">
              <Text fontSize="4xl" color="red" >
                <BiAtom />
              </Text>

              <Text fontSize="2xl"  >
                Mission: <strong>{launch.mission_name}</strong> ({launch.launch_year})
              </Text>
              <Spacer />
              {<Text fontSize="2xl"  >
                Rocket: <strong>{launch.rocket.rocket_name}</strong>
              </Text>}
              <Spacer />
              <Tag p={2} size='md' colorScheme={launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? <HiCheck /> : <HiX />}
              </Tag>

              <Imagen {...launch} />

              <Flex align="center">
                <HiCalendar />
                <Text as='b' fontSize="sm" ml={2} >
                  {launch.launch_date_local.split("T")[0]}
                </Text>
              </Flex>

              <Detalles {...launch} />

            </Box>

          )}
        </Grid>
      </Container>

      <Footer />
    </>
  )
}


