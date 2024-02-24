import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const Detalles = (launch) => {
    return (
        <Flex align="center">
            <Text color="blue" fontSize="md" ml={2} >
                {launch.details}
            </Text>
        </Flex>
    )
}

export default Detalles