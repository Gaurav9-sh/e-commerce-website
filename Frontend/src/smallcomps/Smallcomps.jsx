import React from 'react'
import "./smallcomps.css"

function Smallcomps({pic, text1, text2, height, width}) {
    

  return (
    <div className='big-boxer'>
     
     <div className="boxer" style={{height: height, width: width}}>
        <div id="picc">
        <img src={pic} />
        </div>
        <h3>{text1}</h3>
        <p>{text2}</p>
     </div>

    </div>
  )
}





export default Smallcomps