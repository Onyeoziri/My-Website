import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {NavBar, Footer} from '../components'


function HomeComp() {
  return (
    <div>
      <Router>
        <NavBar />
      </Router>
      HomeComp
      </div>
  )
}

export default HomeComp