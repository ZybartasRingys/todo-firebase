import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  fonts: {
    body: `'Josefin-sans' sans-serif`,
  },

  config,
})

export default theme
