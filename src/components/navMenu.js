import React from 'react'
import { Link } from 'gatsby' 

const navMenu = ({whiteLogo}) => {

    const links = [
        {title: 'Services', link: '/'},
        {title: 'Staff', link: '/'},
        {title: 'News', link: '/'},
        {title: 'Pharmacy', link: '/'},
        {title: 'Home', link: '/'},
    ]

    const renderLinks = () => {
        return links.map((link, idx) => {
            return (
                <Link
                  to={link.link}
                  key={idx}
                  style={{
                      color: 'white',
                      textDecoration: 'none',
                      padding: '10px 1.8vw', 
                      textAlign: 'center',
                      fontSize: '1.4em',
                      font: 'Archivo Narrow',
                  }}
                >
                  {link.title}
                </Link>                
            )
        })
    }

    
    
    return (
        <div 
          className='nav-menu'
          style={{
            width: '55%',
            marginLeft: '20px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-end'
          }}
        >
            {renderLinks()}

        </div>
    )
}

export default navMenu; 