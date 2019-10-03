import React from 'react'
import { Row } from 'reactstrap'

function Display(props) {
    return (
        <div>
            <h3>At Bat: #{props.number} {props.name}</h3>
            <Row>
                <div className="col-6 text-center">
                    <h1 data-testid="ball">{props.ball}</h1>
                    <h4>BALL</h4>
                </div>
                <div className="col-6 text-center">
                    <h1 data-testid="strike">{props.strike}</h1>
                    <h4>STRIKE</h4>
                </div>
                {/* <div>
                    <h4>{props.out}</h4>
                    <h4>OUT</h4>
                </div> */}
            </Row>
        </div>
    )
}

export default Display