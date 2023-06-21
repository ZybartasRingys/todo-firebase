import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  fonts: {
    body: `'josefin-sans' sans-serif`,
  },
  config,
})

export default theme
