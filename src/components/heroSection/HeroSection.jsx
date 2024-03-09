import React from 'react'
import back from './back.png'

function HeroSection() {
  return (
    <div>
        <img src={back} alt="" 
        style={{ 
          width: '100%',    // Set width to maximum
          height: '90vh',    // Set height to 80vh
          objectFit: 'cover',
          objectPosition: 'center'
        }} />
    </div>
  )
}

export default HeroSection