import React from 'react'
import  {AiFillLinkedin, AiFillGithub} from 'react-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      
     <Link to= "Intro">About</Link>
     <Link to= "Intro">Contact</Link>

    </div>
  )
}

export default Footer