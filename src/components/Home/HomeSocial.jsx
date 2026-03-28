import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function HomeSocial() {
  return (
    <div className='home-socials'>
      <a href="#" target='_blank' rel="noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
      <a href="#" target='_blank' rel="noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
    </div>
  )
}

export default HomeSocial
