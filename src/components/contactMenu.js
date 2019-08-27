import React from 'react'
import {Link } from 'gatsby'; 
import './contactMenu.css'

const contactMenu = () => {
    return (
      <div className='contactMenu'>
        <div className='contactMenu-title'>
          Santa Fe
        </div>
        <div className='contactMenu-subtitle'>
          Vet Clinic
        </div>
        <div className='contactMenu-data'>
          <a className='contactMenu-phone-num' href='tel:620-846-2239' >(620) 846-2239</a>
          <Link 
            to={'/'}
            style={{
                color: 'white',
                textDecoration: 'none',
                padding: '12px 2vw', 
                textAlign: 'center',
                fontSize: '1.2em',
                font: 'Archivo Narrow',
            }}
          >Contact Us</Link>
        </div>
    </div>
    ); 
}

export default contactMenu; 
