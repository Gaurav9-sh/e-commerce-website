// import React, { useState } from 'react'
// import "./contact.css"

// function Contact() {
//     const [Name,setName] = useState("");
//     const [Mail,setMail] = useState("");
//     const [Message,setMessage] = useState("");
//     const [Phone,setPhone] = useState("");

//     const handleSubmit = () =>{
//       setMail("");
//       setMessage("");
//       setName("");
//       setPhone("");
//     }

//   return (
//     <div id='cbox'>
        
//       <div className="cleft">
//         <div className="contus">
//             <span className='emjj'>&#128382;</span>&nbsp; <span className='cdq'>Call To Us</span> 
//             <br />
//             <br />
//             We are available 24/7, 7 days a week.
//             <br />
//             Phone: +85xxxxxxxx
//             <br />
//             <br />
//             <hr />
//             <br />
//             <span className='emjj'>&#128386;</span>&nbsp; <span className='cdq'>Write to Us</span>
//             <br />
//             <br />
//             Fill out our form and we will contact you within 24 hours.
//             <br />
//             Email: info@example.com
//             <br />
//             Email: info2@exclusive.com
//         </div>
//       </div>
//          <form action='https://formspree.io/f/xrgngknl' method='POST'>
//       <div className="cright">
//             <div id='cinfo'>
//                 <input type="text" placeholder='Your Name'  className='cds' required />
//                 <input type="text" placeholder='Your Email'  className='cds' required />
//                 <input type="text" placeholder='Your Phone'  className='cds' />
//             </div>
//             <textarea name="message"  id="cmsg" cols="30" rows="10" className='ctesta' placeholder='Message' required/>
//             <div className='ccbtn'>
//                 <button id='cbtn' type='submit' onSubmit={handleSubmit}>Send Message</button>
//             </div>
//       </div>
//         </form>
//     </div>
//   )
// }

// export default Contact

import React, { useState } from 'react';
import "./contact.css";

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
            <form action='https://formspree.io/f/xrgngknl' method='POST'>
                <div className="cright">
                    <div id='cinfo'>
                        <input
                            type="text"
                            placeholder='Your Name'
                            className='cds'
                            required
                            autoComplete='off'
                            name='Name'
                            
                        />
                        <input
                            type="text"
                            placeholder='Your Email'
                            className='cds'
                            required
                            name='Mail'
                            
                        />
                        <input
                            type="text"
                            placeholder='Your Phone'
                            className='cds'
                            name='Phone'
                            required
                            
                        />
                    </div>
                    <textarea
                        name="message"
                        id="cmsg"
                        cols="30"
                        rows="10"
                        className='ctesta'
                        placeholder='Message'
                        
                    />
                    <div className='ccbtn'>
                        <button id='cbtn' type='submit'>Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact;
