import React from 'react'
import "./checkout.css"
import image59 from "../images/image59.jpg"

function Checkout() {

  return (
    <div className='mmain'>
       <div className='lleft'>
         <h3 id='billing'>Billing Details</h3>
         <div className='detail'>
         First Name<span className='opt'>*</span>
         <br />
         <input type="text" className='check1' required />
         </div>
         <div className='detail'>
         Company Name
         <br />
         <input type="text" className='check1' />
         </div>
         <div className='detail'>
         Address<span className='opt' required>*</span>
         <br />
         <input type="text" className='check1' />
         </div>
         <div className='detail'>
         Town/City<span className='opt'>*</span>
         <br />
         <input type="text" className='check1' required />
         </div>
         <div className='detail'>
         Phone Number<span className='opt'>*</span>
         <br />
         <input type="text" className='check1'required />
         </div>
         <div className='detail'>
         Email Address<span className='opt'>*</span>
         <br />
         <input type="text" className='check1' required />
         </div>
          
          <div className='detail dd3'>
            <input type="checkbox" value="true" className='billcheck' />
            Save this information for faster check-out next time
          </div>

       </div>

       <div className="rright">
       <div >
          <div className="rright-top">
            <img src={image59} alt="pic" className='imgcheckk' />
            <span>LCD Monitor</span>
            <span>$650</span>
          </div>

          <div className="rright-top">
            <img src={image59} alt="pic" className='imgcheckk' />
            <span>Hi GamePad</span>
            <span>$1100</span>
          </div>

     

       <div className="rright-top">
        <span>Subtotal:</span>
        <span>$1750</span>
       </div>
       <hr />
       <div className="rright-top">
        <span>Shipping:</span>
        <span>Free</span>
       </div>
       <hr />
       <div className="rright-top">
        <span>Total:</span>
        <span>$1750</span>
       </div>

       <div>
        <div>
           <div className='cashhh'>
           <input type="radio" name='bank' className='billcheck' /> Bank
           </div>
            <div className='cashhh'>
            <input type="radio" name='bank' className='billcheck'/> Cash on Delivery
            </div>
        </div>

        <div id='couppp'>
            <input type="text" className='inputcheck' placeholder='Coupon Code' />
            <button className='btncheck'>Apply Coupon</button>
        </div>
        <div>
            <button className='btncheck'>Place Order</button>
        </div>
       </div>
    
       </div>
       </div>
    </div>
  )
}

export default Checkout