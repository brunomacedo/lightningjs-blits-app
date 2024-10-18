import Blits from '@lightningjs/blits'
import App from './App'

Blits.Launch(App, 'app', {
  w: window.innerWidth,
  h: window.innerHeight,
  multithreaded: false,
  debugLevel: 1,
  fonts: [
    {
      family: 'lato',
      type: 'msdf',
      file: 'fonts/Lato-Regular.ttf',
    },
    {
      family: 'raleway',
      type: 'msdf',
      file: 'fonts/Raleway-ExtraBold.ttf',
    },
    {
      family: 'opensans',
      type: 'web',
      file: 'fonts/OpenSans-Medium.ttf',
    },
  ],
})
