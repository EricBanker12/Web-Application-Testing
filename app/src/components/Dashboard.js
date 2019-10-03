import React from 'react'

function Dashboard(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <h4>At Bat:</h4>
                <div>
                    <label htmlFor="number">Number</label>
                    <input id="number" type="number" placeholder="0-99" min={0} max={99} />
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Full Name" />
                </div>
                <button type="submit">SET AT BAT</button>
            </form>
            <div>
                <button>BALL</button>
                <button>STRIKE</button>
                <button>FOUL</button>
                <button>HIT</button>
            </div>
        </div>
    )
}

export default Dashboard