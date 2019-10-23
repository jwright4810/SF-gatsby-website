import React from 'react';
import { Link } from 'gatsby'; 
// import DropDownMenu from './dropDownMenu';
import Img from 'gatsby-image';
import './navMenu.css';
import DropDownMenu from './dropDownMenu';

const links = [
  {title: 'Services', link: '/services/'},
  {title: 'Staff', link: '/'},
  {title: 'News', link: '/'},
  {title: 'Pharmacy', link: '/'},
  {title: 'Home', link: '/'},
]

class NavMenu extends React.PureComponent {
  
  state = {
    activeStyle: {
      color: 'white', 
      textDecoration: 'none',
      padding:  '12px 1.8vw', 
      textAlign:  'center',
      fontSize:  '1.4rem',
      letterSpacing: '0px',
      fontWeight: '800',
      font:  'Archivo Narrow',
      transition: 'font-size 1s',
    }
  }

  componentDidMount() {
    this.handleActiveStyle();
    window.addEventListener('resize', this.handleActiveStyle)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleActiveStyle)
  }

  handleActiveStyle = () => {
    
    if (window.innerWidth < 1030) {
      const activeStyleChange = {  
        ...this.state.activeStyle,
        fontSize: '1.1rem'      
      }

      this.setState({
        activeStyle: activeStyleChange
      });
    } else if ( window.innerWidth > 1029 ) {
      const activeStyleChange = {  
        ...this.state.activeStyle,
        color: 'white',
        fontSize: '1.4rem'      
      }

      this.setState({
        activeStyle: activeStyleChange
      });      
    }

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
          activeStyle={this.state.activeStyle}
          >
            {this.renderLogo(curr.title)}
          </Link>                
        )
     })
  }  
  
  render() {
    
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
        {
          window.innerWidth > 850 
          ? this.renderLinks()
          : <DropDownMenu list={links} />
        }
      </div>
    ) 
  }
}

export default NavMenu; 