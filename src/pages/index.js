import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import LinkCards from "../components/linkCards"
import Img from "gatsby-image"
import SEO from "../components/seo"
import './index.css'


const HomePage = ({ data }) => {
  
  const images = {
    services: data.dogGrooming.childImageSharp.fluid,
    team: data.drFamily.childImageSharp.fluid,
    news: data.horseEating.childImageSharp.fluid
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className='about'>
        <div className='about-summary'>
          <div className="box-heading">
            <h1>Modern Medicine</h1>
            <Img className="wagon-wheel-break" fluid={data.wagonWheelBreak.childImageSharp.fluid} />
             <h2>Traditional Values</h2>
          </div>
          <div className='summary'>  
            <p>
              Santa Fe Trail Veterinary clinic is located in Montezuma, Kansas. We are a rural mixed animal practice and offer
              a wide range of services to our clientele. At SFTVC , we pride ourselves on having a progressive veterinary 
              practice, while maintaining a small town atmosphere . Some of the services we offer are small animal 
              medicine/surgery, food animal medicine/surgery, animal chiropractic care and equine reproduction, surgery and
              medicine. We also offer cow/calf, stocker and feedlot management for clients. We have a portable digital 
              radiographs machine, cold laser machine, ultrasound and EKG/blood pressure machine. 
            </p>
          </div>
        </div>
        <Img className='about-pic' fluid={data.aboutPic.childImageSharp.fluid} />
      </div>
      <LinkCards images={images} />
    </Layout>
  )
}

export const query = graphql`
  query {
    wagonWheelBreak: file(relativePath: { eq: "wagon-wheel-line.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 550) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    aboutPic: file(relativePath: { eq: "vet_stock_photo.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    drFamily: file(relativePath: { eq: "dr.jodi-family.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
    dogGrooming: file(relativePath: { eq: "dog-grooming-1.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    horseEating: file(relativePath: { eq: "horse-eating.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    } 
  }
`

export default HomePage; 




