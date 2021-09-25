import React from 'react'
import {Link} from 'react-router-dom'


const Hero = () => {
  return(
      
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>

    <img src="website\src\images\bacImage1.jpg" alt ="hotel"/>
    
    <Link to="/"><button>ReturnHome</button></Link>
    </div>
    
    )  
}

export default Hero