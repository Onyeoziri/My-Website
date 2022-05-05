import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import styles from './Home.module.scss'
import me from '../../assets/images/me.jpg'
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';

function Home() {
  
  let navigate = useNavigate();

  const [Open, setOpen] = useState(false)

  const TooltipClose = () => {
    setOpen(false);
  };

  const TooltipOpen = () => {
    setOpen(true);
  };


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        
        <img  src={me} className={styles.myimage} alt="My Portrait" />

      </div>
      
      <div className={styles.right}>

        <h2>Hey I'm Onyeoziri Ike-Amaechi. Here are Portfolio's based on my career and hobbies.</h2>
        <br />

        <button onClick={() => {navigate("/computerScience")}}>Computer Science</button>

        <ClickAwayListener onClickAway={TooltipClose}>
          <Tooltip
              PopperProps={{
              disablePortal: true,
              }}
              onClose={TooltipClose}
              open={Open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title="Coming Soon!"
              placement="top"
            >
            <button onClick={TooltipOpen}>Engineering</button>
          </Tooltip>
        </ClickAwayListener>

        <Tooltip 
          title="Coming Soon!"
          placement="top"
          >
        <button>Photography</button>
        </Tooltip>
        
        
      
      </div>
      

      
    </div>
  )
}

export default Home