import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './portal.css';
 
class Portal extends React.PureComponent {
    static propTypes = {
      controlName: PropTypes.string.isRequired
    }
    static defaultProps = {
      parentNode: document.body
    }
    
    constructor(props) {
    super(props)
    
    this.controlName = props.controlName;
    this.portalContainer = document.createElement('div');
    this.portalContainer.setAttribute('id', this.props.controlName);
    this.portalContainer.setAttribute('class', this.props.controlName);
  }

  componentDidMount() {
      this.props.parentNode.appendChild(this.portalContainer); 
  }

  componentWillUnmount() {
    this.props.parentNode.removeChild(this.portalContainer); 
  }
  
  render() {
    return ReactDOM.createPortal(this.props.children, this.portalContainer); 
  }

}

export default Portal