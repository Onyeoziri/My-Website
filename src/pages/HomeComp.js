import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {NavBar, Footer, CompIntro, CompProject} from '../components'


function HomeComp() {
  return (
    <div className='CompSciP'>
      <NavBar/>
      <CompIntro/>
      <CompProject />
      <Footer />
    </div>
  )
}

export default HomeComp