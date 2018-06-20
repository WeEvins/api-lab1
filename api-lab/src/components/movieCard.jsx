import React, { Component } from 'react';

let movieCard = (props) => (
<div>
        <div className="col-md-3">
            <div className="card border-dark mb-3">
                <div className="card-header">
                <p>
                {props.movie.title}
                </p>
                </div> 
                <div className="card-body text-dark">
                    <p className="card-text">
                {props.movie.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default movieCard;