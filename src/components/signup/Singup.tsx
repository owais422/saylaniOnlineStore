import React from 'react'
import Buttons from '../button/Buttons'
import "./signup.css"

const Singup = () => {
    return (
        <div className='sinup'>
            <div className='singup-head'>
            <h2>Saylani Welfare</h2>
            <h3>Online Discount Store</h3>

            </div>
            <form action="">
                <div className='sinup-fields'>

                <div className='sinup_field'>
                    
                    <input type="text" placeholder='Full Name' className='sinup-field' />

                </div>
                <div className='sinup_field'>
                    
                    <input type="number" placeholder='Contact' className='sinup-field' />

                </div>
                <div className='sinup_field' >
                    
                    <input type="email" placeholder='Email' className='sinup-field' />

                </div>
                <div className='sinup_field'>
                    
                    <input type="password" placeholder='Password' className='sinup-field' />
                </div>

                </div>
                <div className='Sinup-btn'>
                    <Buttons data={"Sinup"} />
                </div>
            </form>
        </div>
    )
}

export default Singup