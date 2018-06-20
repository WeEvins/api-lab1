import React, { Component } from 'react';

let movieCard = (props) => (
<div>
        <div className="col-md-3">
            <div className="card border-dark mb-3">
                <div className="card-header">
                {/* movie title goes here */}
                </div> 
                <div className="card-body text-dark">
                    <p className="card-text">
                    {/* description of movie goes here */}
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default movieCard;