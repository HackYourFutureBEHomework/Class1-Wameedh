import React, { Component } from 'react'

class Image extends Component {
  render() {
    return (
        <img 
            src={this.props.image.imgSrc}
            alt={this.props.image.name}
        />
    )
  }
}

export default Image