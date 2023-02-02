// IMPORT: REACT
import React, { useEffect } from 'react'
// IMPORT: COMPONENTS
import SpaceBackground from './components/SpaceBackground/SpaceBackground'
import ShootingStars from './components/ShootingStars/ShootingStars'
import Navbar from './components/Navbar/Navbar'
import Presentation from './components/Presentation/Presentation'
// IMPORT: FONTS
import './fonts/raleway/Raleway-Light.ttf'
import './fonts/raleway/Raleway-Medium.ttf'
import './fonts/raleway/Raleway-Regular.ttf'
import './fonts/raleway/Raleway-SemiBold.ttf'
import './fonts/raleway/Raleway-Bold.ttf'
import './fonts/raleway/Raleway-ExtraBold.ttf'

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
      <Presentation />
    </div>
  )
}

export default App