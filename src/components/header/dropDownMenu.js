import React from 'react'; 
import Portal from '../portal'
import { Link } from 'gatsby';
import './dropDownMenu.css';

class DropDownMenu extends React.Component {
  
  state = {
      listOpen: true,
  }

  toggleListOpen = () => {
    this.setState( prevState => ({ listOpen: !prevState.listOpen })); 
  }

  renderMenuIcon = () => {
      return (
        <div className="menu-icon" onClick={ this.toggleListOpen }>
            <div className="menu-icon-component" />
            <div className="menu-icon-component" />
            <div className="menu-icon-component" />
        </div>
      );
  }

  renderMenuList = () => {
    const { list } = this.props; 

    return (
      <div className="dropDownMenu-list">
        {
          list.map( ( curr, idx ) => {
            return (
              <div className="dropDownMenu-list-item">
                <Link
                  to={curr.link}
                  key={idx}
                  style={{
                    color: 'white',
                  }}
                >{curr.title}</Link>
              </div>

            )
          })
        }
      </div>
    ); 
    
    

  }

  render() {
   const { listOpen } = this.state; 
   return (
     <Portal controlName='dropDownMenu-portal'>
     <div className="dropDownMenu-wrapper">
         { this.renderMenuIcon() }
         { listOpen && this.renderMenuList() }
     </div>

     </Portal>
   );
  }
}

export default DropDownMenu