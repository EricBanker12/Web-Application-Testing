import React from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'

import useInput from '../hooks/useInput'

function Dashboard(props) {
    const [number, numberHandler] = useInput()
    const [name, nameHandler] = useInput()

    return (
        <div>
            <h4>At Bat:</h4>
            <Form className="row" onSubmit={e=>{props.onSubmit(e, number, name)}}>
                <div className="col-3">
                    <label htmlFor="number">Number</label>
                    <Input
                        id="number"
                        type="number"
                        placeholder="0-99"
                        min={0}
                        max={99}
                        value={number}
                        onChange={numberHandler}
                    />
                </div>
                <div className="col-9">
                    <label htmlFor="name">Name</label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={nameHandler}
                    />
                </div>
                <Button className="m-3 w-100" type="submit">SET AT BAT</Button>
            </Form>
            <div className="d-flex justify-content-between">
                <Button name="ball" data-testid="ballButton" onClick={props.onButton}>BALL</Button>
                <Button name="strike" data-testid="strikeButton" onClick={props.onButton}>STRIKE</Button>
                <Button name="foul" onClick={props.onButton}>FOUL</Button>
                <Button name="hit" onClick={props.onButton}>HIT</Button>
            </div>
        </div>
    )
}

export default Dashboard