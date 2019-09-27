import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import './linkCards.css'

const linkCards = ({ images }) => {
    
    const { services, team, news } = images

    const links = [
        { title: 'Our Services', link: '/', img: services, alt: 'Dog getting a bath' },
        { title: 'Meet the Team', link: '/', img: team, alt: 'Dr. Jodi and Family' },
        { title: 'News', link: '/', img: news, alt: 'Horse eating hay' },

    ]
    
    const renderCards = () => {
        return links.map(( curr, idx ) => {
          return (
            <Link 
              to={ curr.link }
              key={ idx }
              alt={ curr.alt }
              activeClassName='linkCard'
            >
             <React.Fragment>
               <div className='linkCard-header'>
                  <h1>{curr.title}</h1>
                </div>
                < Img className='linkCard-img' fluid={ curr.img } />
              </React.Fragment>
            </Link>        
          )
        })
    }

    return (
      <div className='linkCards'>
        <div className='linkCards-container'>
            { renderCards() }
        </div>
      </div>  
    )
}

export default linkCards; 