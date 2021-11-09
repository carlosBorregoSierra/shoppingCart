//Chakra UI
import { Container, Text, Box, Heading, Button, Flex, useColorModeValue } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
//Types
import { propsHome } from "../Types";
//react-router-dom
import { Link } from "react-router-dom";

const Home: React.FC<propsHome> =  ({ title, subtitle, description }: propsHome) => {

    const color = useColorModeValue('gray.900', 'gray.50');

    return(
        <Container maxW="70%" textAlign="center">
            <Flex mt={20} justifyContent="center" alignItems="center" flexDir="column">
                <Box maxW="full">
                    <Heading as="h1" mt={20} fontSize="6xl">
                        <Text
                            bgGradient="linear(to-l, #7928CA, #FF0080)"
                            bgClip="text"
                            fontSize="6xl"
                            fontWeight="extrabold"
                            >
                            {title}
                        </Text>
                        <Text color="yellow.500">{ subtitle }</Text>   
                    </Heading>
                    <Text mt={10} fontSize="3xl" textAlign="center" color={color}>{ description }</Text>
                </Box>

                <Box mt={10}>
                    <Link to="products">
                        <Button as="a" variant="btn-primary" cursor="pointer" _hover={{color: "#FF0080", backgroundColor:"gray.50", outline: "2px solid #FF0080"}}>
                            Comprar
                            <ArrowForwardIcon ml={2} w={6} h={5} />
                        </Button>
                    </Link>
                </Box>
            </Flex>
        </Container>
    )
}

export default Home;