import React from 'react'

import useInput from '../hooks/useInput'

function Dashboard(props) {
    const [number, numberHandler] = useInput()
    const [name, nameHandler] = useInput()

    return (
        <div>
            <form onSubmit={e=>{props.onSubmit(e, number, name)}}>
                <h4>At Bat:</h4>
                <div>
                    <label htmlFor="number">Number</label>
                    <input
                        id="number"
                        type="number"
                        placeholder="0-99"
                        min={0}
                        max={99}
                        value={number}
                        onChange={numberHandler}
                    />
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={nameHandler}
                    />
                </div>
                <button type="submit">SET AT BAT</button>
            </form>
            <div>
                <button name="ball" onClick={props.onButton}>BALL</button>
                <button name="strike" onClick={props.onButton}>STRIKE</button>
                <button name="foul" onClick={props.onButton}>FOUL</button>
                <button name="hit" onClick={props.onButton}>HIT</button>
            </div>
        </div>
    )
}

export default Dashboard