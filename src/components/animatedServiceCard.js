import React, {PureComponent } from 'react'; 

class AnimatedServiceCard extends PureComponent {
    state = {
        show: true,
        style: {
            opacity: 0,
            transition: 'all 2s ease',
        }
    }

    unMountStyle = () => { // css for unmount animation
        this.setState({
          style: {
            opacity: 0,
            transition: 'all 1s ease',
          }
        })
      }
          
    mountStyle= () => { // css for mount animation
      this.setState({
        style: {
          opacity: 1,
          transition: 'all 1s ease',
        }
      })
    }
        
}