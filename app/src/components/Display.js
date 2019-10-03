import React from 'react'

function Display(props) {
    return (
        <div>
            <h3>At Bat: #{props.number} {props.name}</h3>
            <div>
                <div>
                    <span className="score" data-testid="ball">{props.ball}</span>
                    <h4>BALL</h4>
                </div>
                <div>
                    <span className="score" data-testid="strike">{props.strike}</span>
                    <h4>STRIKE</h4>
                </div>
                {/* <div>
                    <h4>{props.out}</h4>
                    <h4>OUT</h4>
                </div> */}
            </div>
        </div>
    )
}

export default Display