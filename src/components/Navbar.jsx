import { Box, Text, Button, Image } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import moon from '../../public/icon-moon.svg'
import sun from '../../public/icon-sun.svg'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      backgroundImage={
        colorMode === 'light'
          ? `/public/bg-mobile-light.jpg`
          : `/public/bg-mobile-dark.jpg`
      }
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      w='100%'
      h='200px'
      display='flex'
      justifyContent='space-between'
      pt='48px'
      px='24px'
    >
      <Text color='white' fontSize='20px' letterSpacing='15px' fontWeight='700'>
        TODO
      </Text>
      <Button
        bgColor='transparent'
        _hover={{ bg: 'transperant' }}
        _active='none'
        onClick={toggleColorMode}
      >
        {colorMode === 'light' ? (
          <Image boxSize='20px' src={moon} alt='moon' />
        ) : (
          <Image boxSize='20px' src={sun} alt='sun' />
        )}
      </Button>
    </Box>
  )
}

export default Navbar
