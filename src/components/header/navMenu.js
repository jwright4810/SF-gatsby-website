import React from 'react'
import { Link } from 'gatsby' 
import Img from 'gatsby-image'
import './navMenu.css'

const navMenu = ({whiteLogo}) => {

    const links = [
        {title: 'Services', link: '/'},
        {title: 'Staff', link: '/'},
        {title: 'News', link: '/'},
        {title: 'Pharmacy', link: '/'},
        {title: 'Home', link: '/'},
    ]

    const renderLogo = (title) => {
      if (title !== 'Home') {
        return title
      } else {
        return <Img className='link-logo' fluid={whiteLogo} />
      }
    }

    const renderLinks = () => {
        
      
      return links.map((link, idx) => {
            return (
                <Link
                  to={link.link}
                  key={idx}
                  activeClassName='navMenu-links'
                >
                  {renderLogo(link.title)}
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