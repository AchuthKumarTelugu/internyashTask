import React from 'react'
import './order.css'
function OrderPage() {
  return (
    <div>
  <div className='order'>
    <div className='order-image'>
      <img src='Order-image.png'></img>
      <div className='order-name'>
      Ready to Mix Dosa Powder
      </div>
    </div>
    <div className='order-form'>
      <form className='form-order'>
        <input className='order-input'type='text' name='name' placeholder='Enter name'></input>
        <input className='order-input'type='email' name='email' placeholder='Enter email'></input>
      </form>
      <div className='whatsapp-order-button'>
        <button className='order-btn'>
          <div className='order-btn-des'>
             <div className='whatsapp-img'>
              <img src='./whatsapp-img.png'></img>
             </div>
             <div className='btn-text'>Order Now</div>
          </div>
        </button>
      </div>
    </div>
  </div>
        </div>
  )
}

export default OrderPage