import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='text-center text-white footer'>
            <small>Coppyright © {new Date().getFullYear()}</small>
        </div>
    );
};

export default Footer;