import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import styles from './Home.module.scss'
import me from '../../assets/images/me.jpg'

function Home() {
  
  let navigate = useNavigate();


  const [openModel, setOpenModel] = useState(false)


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        
        <img  src={me} className={styles.myimage} alt="My Portrait" />

      </div>
      
      <div className={styles.right}>

        <h2>Hey I'm Onyeoziri Ike-Amaechi. Here are Portfolio's based on my career and hobbies.</h2>
        <br />

        <button onClick={() => {navigate("/computerScience")}}>Computer Science</button>
        <button>Engineering</button>
        {openModel && (
          <div className={styles.tooltip}>
          <h3>Coming Soon!</h3>
        </div>
        )}

        <button>Photography</button>
      
        
        
      
      </div>
      

      
    </div>
  )
}

export default Home