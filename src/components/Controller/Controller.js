import React from "react";

const imageStyle = {
  width: '100%'
};

const Controller = props => (
  <div className="card mb-3"
    value={props.id}
    onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
      <img style={imageStyle} alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Controller;