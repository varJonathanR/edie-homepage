import React from 'react'
import CustomEmail from './CustomEmail'

function Home({ srcImg }) {
  return (
    <div id='Home' className='home'>
        <div className='home-title'>
            <p>Unhapy with your website?</p>
            <h3>We create beatifull and fast web services</h3>
        </div>
        <img src={srcImg} alt="Team hero image" />
        <div className="home-intro">
            <h3>Story, emotion and purpose</h3>
            <p>We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</p>
        </div>
        <CustomEmail className="email" />
    </div>
  )
}

export default Home