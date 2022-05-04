import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {NavBar, Footer, cIntro, cProject} from '../components'


function cHome() {
  return (
    <div className='cHome'>
     <NavBar />
     <Router>
        <NavBar />
      </Router>
    </div>
  )
}

export default cHome