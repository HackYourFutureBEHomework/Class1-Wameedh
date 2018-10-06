import React, { Component } from "react";
import Image from "./Image";
import Details from "./Details";

class MovieRepo extends Component {
  render() {
    return (
      <li>
        <Image image={this.props.movie} />
        <div className="Text-view">
          <h4>{this.props.movie.name}</h4>
          <Details details={this.props.movie} />
          <div className="Text-color">
            {this.props.movie.director}
            <span> | </span>
            {this.props.movie.actors.join(", ")}
          </div>
          <p>{this.props.movie.description}</p>
        </div>
      </li>
    );
  }
}

export default MovieRepo;