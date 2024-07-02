import { Box, Flex } from "@chakra-ui/react"
import SideImage from "~/lib/components/SideImage/SideImage"
import SigninForm from "./SigninForm"



const index = () => {
  return (
    <Box w="full" h="100%">
      <Box
        w="100%"
        h="100%"
        p='40px'
      >
        <Flex alignItems="center">
          <Box w='50%'>
            <SideImage />
          </Box>
          <Box w='50%'>
            <SigninForm />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default index