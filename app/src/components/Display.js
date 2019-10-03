import React from 'react'

function Display(props) {
    return (
        <div>
            <h3>At Bat: #{props.number} {props.name}</h3>
            <div>
                <div>
                    <span className="score" id="ball">{props.ball}</span>
                    <h4>BALL</h4>
                </div>
                <div>
                    <span className="score" id="strike">{props.strike}</span>
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