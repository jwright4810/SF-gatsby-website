import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const tabs = [
  { type: 'horse', title: 'Equine Services', description: ''},
  { type: 'small', title: 'Small Services', description: ''},
  { type: 'groom', title: 'Grooming Services', description: ''},
  { type: 'large', title: 'Food Animal Services', description: ''},
]

const servicesTab = () => {
  
}

const ServicesPage = () => (
  <Layout>
    <SEO title="Santa Fe Services Page" />
   <div className="service-page">
     <div className="service-page-flex-container">
       <div className="service-page-content">
                   
       </div>  
     </div>  
   </div> 
  </Layout>
)

export default ServicesPage
