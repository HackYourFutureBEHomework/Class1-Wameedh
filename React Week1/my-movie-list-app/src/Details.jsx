import React, { Component } from 'react'

class Details extends Component {
  render() {
    return (
        <p>
            <span>{this.props.details.released}</span>
            <span> | </span>
            <span>{this.props.details.duration} min.</span>
            <span> | </span>
            <span>{this.props.details.genres.join(", ")}</span>
        </p>
    )
  }
}

export default Details