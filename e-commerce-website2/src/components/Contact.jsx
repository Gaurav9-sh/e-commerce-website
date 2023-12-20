import React from 'react'
import "./contact.css"

function Contact() {


  return (
    <div id='cbox'>
        
      <div className="cleft">
        <div className="contus">
            <span className='emjj'>&#128382;</span>&nbsp; <span className='cdq'>Call To Us</span> 
            <br />
            <br />
            We are available 24/7, 7 days a week.
            <br />
            Phone: +85xxxxxxxx
            <br />
            <br />
            <hr />
            <br />
            <span className='emjj'>&#128386;</span>&nbsp; <span className='cdq'>Write to Us</span>
            <br />
            <br />
            Fill out our form and we will contact you within 24 hours.
            <br />
            Email: info@example.com
            <br />
            Email: info2@exclusive.com
        </div>
      </div>

      <div className="cright">
            <div id='cinfo'>
                <input type="text" placeholder='Your Name' className='cds' required />
                <input type="text" placeholder='Your Email' className='cds' required />
                <input type="text" placeholder='Your Phone' className='cds' />
            </div>
            <textarea name="message" id="cmsg" cols="30" rows="10" className='ctesta' placeholder='Message' required/>
            <div className='ccbtn'>
                <button id='cbtn'>Send Message</button>
            </div>
      </div>

    </div>
  )
}

export default Contact