import React from 'react'; 
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import NavMenu from './navMenu'
import ContactMenu from './contactMenu'
import './header.css'; 

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
  query {
    woodBackground: file(relativePath: { eq: "wood_long_bg.jpeg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    whiteLogo: file(relativePath: { eq: "white-sf-logo.png"}) {
      childImageSharp {
        fluid(maxWidth: 215, maxHeight: 150 ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  
  return (
    <BackgroundImage Tag="section"
      className="wood-wrapper"
      fluid={data.woodBackground.childImageSharp.fluid}
    >
      <div>
        <div className='header-overlay' > 
          <div className='header-container' >
            <NavMenu whiteLogo={data.whiteLogo.childImageSharp.fluid}/>
            <ContactMenu />          
          </div>  

        </div>  

      </div>  
    </BackgroundImage>    



)
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
