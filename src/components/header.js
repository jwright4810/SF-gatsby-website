import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import NavMenu from './navMenu'

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
        fluid(maxWidth: 300) {
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
      <div
          style={{
            margin: `0 auto`,
            height: `225px`,
            boxshadow: `10px 10px 25px black`
          }}
        >
        <div 
          className='header-overlay'
          style={{
            margin: `0 auto`,
            height: `175px`,
            backgroundColor: `rgba(0, 180, 180, 0.9)`,
            display: 'flex' 
          }}
        > 
          <NavMenu whiteLogo={data.whiteLogo.childImageSharp.fluid}/>
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
