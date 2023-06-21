import { Box, Text, Button } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      backgroundImage='/public/bg-mobile-dark.jpg'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      w='100%'
      h='200px'
    >
      <Text color='white'>TODO</Text>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Box>
  )
}

export default Navbar
