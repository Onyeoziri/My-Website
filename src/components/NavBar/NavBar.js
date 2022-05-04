import React from 'react'
import {NavLink} from "react-router-dom";
import {FaBars, AiOutlineFilePdf} from "react-icons/fa";
import styles from './NavBar.module.scss'

function NavBar() {
  return (
    <div className={styles.Nav}>

      <FaBars className={styles.Bar} />

      <div className={styles.NavMenu}>
        
        <NavLink className={styles.NavItem} to="">
          Home
        </NavLink>

        <NavLink className={styles.NavItem} to="">
          Skills
        </NavLink>

        <NavLink className={styles.NavItem} to="">
          Projects
        </NavLink>

        <NavLink className={styles.NavItem} to="">
          TimeLine
        </NavLink>

        <NavLink className={styles.NavItem} to="">
          Contacts
        </NavLink>

        <NavLink className={styles.NavItem} to="">
          
          Resume
        </NavLink>

      </div>


    </div>
  )
}

export default NavBar