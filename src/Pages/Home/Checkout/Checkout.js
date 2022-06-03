import React, { useEffect, useState } from 'react';
import './Checkout.css'
import { Navigate, useNavigate } from 'react-router-dom';
const Checkout = () => {
    const Navigate = useNavigate();
    const handleCheckout=()=>{
        alert('Congratulations')
    }
    return (
        <div className='form'>
              <form>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                
                <input type="text" name="Address" id="" placeholder='Address' required/>
                <input onClick={handleCheckout} type="submit" value="Checkout" />
            </form>
        </div>
    );
};

export default Checkout;