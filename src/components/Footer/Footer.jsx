import React from 'react';
import img from '../../assets/logo.jpg'

function Footer() {
    return <>
    <footer>
        <div className="container text-center">
        <img className=' mt-4' width={70} src={img} alt="" />
        <ul className='footer-ul d-flex w-75  list-unstyled align-items-center justify-content-center m-auto mt-2'>
            <li className='footer-icn'><i class="fa-brands fa-facebook"></i></li>
            <li className='footer-icn'><i class="fa-brands fa-instagram"></i></li>
            <li className='footer-icn'><i class="fa-brands fa-twitter"></i></li>
        </ul>
        <p className=' text-center text-muted m-3'>© Copyright <span className=' fw-bolder'>Action</span>  All Rights Reserved</p>
        </div>
        
    </footer>
    
    
    </>
}

export default Footer;