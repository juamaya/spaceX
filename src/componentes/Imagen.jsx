import React from 'react'
import {  Image  } from '@chakra-ui/react'
const Imagen = (launch) => {
  return (
    <Image src={launch.links.mission_patch_small} alt="spaceX" width={200} mx="auto" />
  )
}

export default Imagen