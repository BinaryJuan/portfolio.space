// IMPORT: REACT
import React, { useEffect } from 'react'
// IMPORT: COMPONENTS
import SpaceBackground from './components/SpaceBackground/SpaceBackground'
import ShootingStars from './components/ShootingStars/ShootingStars'
import Navbar from './components/Navbar/Navbar'
// IMPORT: FONTS
import './fonts/space-grotesk/SpaceGrotesk-Light.ttf'
import './fonts/space-grotesk/SpaceGrotesk-Medium.ttf'
import './fonts/space-grotesk/SpaceGrotesk-Regular.ttf'
import './fonts/space-grotesk/SpaceGrotesk-Bold.ttf'

const App = () => {
  useEffect(() => {
    setStars()
  })

  const randomizeStars = (nStar, stars) => {
    let top = Math.floor(Math.random() * document.body.scrollHeight)
    top = `${top}px`
    stars[nStar].style.top = top
  }

  const setStars = () => {
    const stars = document.getElementsByClassName('shootingStar')
    stars[0].addEventListener('animationiteration', () => {randomizeStars(0, stars)})
    stars[1].addEventListener('animationiteration', () => {randomizeStars(1, stars)})
  }

  return (
    <div id='home'>
      <SpaceBackground />
      <ShootingStars />
      <Navbar />
    </div>
  )
}

export default App