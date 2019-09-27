import React from 'react'
import { Link } from 'gatsby' 
import Img from 'gatsby-image'
import './navMenu.css'

const links = [
  {title: 'Services', link: '/services/'},
  {title: 'Staff', link: '/'},
  {title: 'News', link: '/'},
  {title: 'Pharmacy', link: '/'},
  {title: 'Home', link: '/'},
]

class NavMenu extends React.Component {
  
  state = {
    windowSize: window.innerWidth
  }

  componentDidMount() {
    window.addEventListener('resize', this.setWindowSizeState)
  }

  setWindowSizeState = () => {
    this.setState({ windowSize: window.innerWidth })
  }
  
  renderLogo = (title) => {
    if (title !== 'Home') {
      return title
    } else {
      return <Img className='link-logo' fluid={this.props.whiteLogo} />
    }    
  }

  renderLinks = () => {
    return links.map((curr, idx) => {
      return (
        <Link
          to={curr.link}
          key={idx}
          activeStyle={{
              color: 'white', 
              textDecoration: 'none',
              padding:  '12px 1.8vw', 
              textAlign:  'center',
              fontSize:  '1.4rem',
              letterSpacing: '0px',
              fontWeight: '800',
              font:  'Archivo Narrow',
              transition: 'font-size 1s',
            }}
          >
            {this.renderLogo(curr.title)}
          </Link>                
        )
     })
  }  
  
  render() {
    console.log(this.state.windowSize);
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
        {this.renderLinks()}
      </div>
    ) 
  }
}

export default NavMenu; 