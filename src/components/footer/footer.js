import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image"

const Footer = () => {
 const data = useStaticQuery(graphql`
  query {
    woodBackground: file(relativePath: { eq: "wood_long_bg.jpeg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    mailLogo: file(relativePath: { eq: "mail_icon.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 50 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fbIcon: file(relativePath: { eq: "facebook_icon.png }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 50 ) {
          ...GatsbyImageSharpFluid_withWebp
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
              height: `160px`,
              boxshadow: `10px 10px 25px black`
            }}
          >
          <div className='footer-overlay' > 
            <a className="location" target="_blank" href="https://goo.gl/maps/jUzAkLNd2Rp">
                <p>Santa Fe Trail Veterinary Clinic llc, 404 W Texaco St. Montezuma, KS 67867</p>
            </a>
           
            <div className="footer-icons">
              <a className="phone-num" href="tel:1620-846-2239" >(620) 846-2239</a>
              <a className="foot-fb"  href="http://www.facebook.com/Santa-Fe-Trail-Veterinary-Clinic-LLC-836603189715775">
                  <Img alt="follow me on facebook" fluid={data.fbIcon.childImageSharp.fluid} />
              </a>
              <a className="mail-icon" href="contact.html">
                  <img src="https://res.cloudinary.com/jwkctech/image/upload/v1537847595/Logo%20and%20icons/mail_icon.png" />
              </a>
            </div>             
          </div>  
  
        </div>  
      </BackgroundImage>    

    );
}

export default Footer