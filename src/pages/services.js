import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import './services.css';

// const tabs = [
//   { type: 'horse', title: 'Equine Services', description: '', image: data.horseEating.childImageSharp.fluid},
//   { type: 'small', title: 'Small Services', description: '', image: data.threeDogs.childImageSharp.fluid },
//   { type: 'groom', title: 'Grooming Services', description: '', image: data.dogGrooming.childImageSharp.fluid },
//   { type: 'large', title: 'Food Animal Services', description: '', image: data.calfRoping.childImageSharp.fluid },
// ]
const tabs = [
  { type: 'horse', title: 'Equine Services', description: '' },
  { type: 'small', title: 'Small Services', description: '' },
  { type: 'groom', title: 'Grooming Services', description: '' },
  { type: 'large', title: 'Food Animal Services', description: '' },
]


const ServicesPage = () => { 
  
  const [service, setService] = useState(tabs[0].type);
  const [isMounted, setIsMounted] = useState(true);
  const shouldRenderChild = useDelayUnmount(isMounted, 500);
  const mountedStyle = { animation: "inAnimation 500ms ease-in" };
  const unmountedStyle = { animation: "outAnimation 510ms ease-in" };
  
  const handleTabClick = (serviceClicked) => {
    setService(serviceClicked);
  }
  
  const servicesTab = () => {
    return tabs.map( ( tab, idx ) => {
      return (
        <li 
          key={idx}
          onClick={handleTabClick(tab.type)}        
        >
          {tab.title}
        </li>
      );
    })
  }

  const renderServiceContent = ( service ) => {
    return tabs
     .filter( tab => service === tab.type )
     .map( tab => {
       return (
         <div>
           {tab.title}
         </div>
       );
     })
  }

  
 
  return (
    <Layout>
      <SEO title="Santa Fe Services Page" />
     <div className="service-page">
       <div className="service-page-flex-container">
         <div className="service-page-tabs">
            <ul>{servicesTab()}</ul>                     
         </div>  
         <div className="service-page-content">
           { renderServiceContent(service) }
         </div>
       </div>  
     </div> 
    </Layout>
  )
}

export const query = graphql`
  query {
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
  threeDogs: file(relativePath: { eq: "three-dogs.jpg" }) {
    childImageSharp {
      fluid(quality: 100, maxWidth: 500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  calfRoping: file(relativePath: { eq: "calf_roping.jpg" }) {
    childImageSharp {
      fluid(quality: 100, maxWidth: 500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }  
}
`

export default ServicesPage
