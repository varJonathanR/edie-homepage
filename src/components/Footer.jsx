import React from 'react'
import CustomEmail from './PageComponents/CustomEmail'
import NavList from './PageComponents/NavList'
import Contact from './PageComponents/Contact'

function Footer() {
  return (
    <div id='Contact' className='footer'>
      <div className="more-info">
        <NavList ulClass={"navList-fo"} />
        <Contact />
        <CustomEmail />
      </div>
      <div className="copyright">
        <p>Created by <a href="https://devchallenges.io/portfolio/varJonathanR" target='_blank' rel='noreferrer'>varJonathanR</a> - <a href="https://devchallenges.io/" target="_blank" rel='noreferrer'>devChallenges.io</a></p>
      </div>
    </div>
  )
}

export default Footer