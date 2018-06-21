import React, { Component } from 'react';

let peopleCard = (props) => (
<div className="card">
  <h5 className="card-header">{props.people.name}</h5>
  <div className="card-body">
    <h5 className="card-title">{props.people.gender}</h5>
    <p className="card-text">{props.people.age}</p>
    <a href={props.people.url} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
)

export default peopleCard;