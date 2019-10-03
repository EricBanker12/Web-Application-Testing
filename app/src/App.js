import React, { useState } from 'react';

import Dashboard from './components/Dashboard'

function App() {
    const [game, setGame] = React.useState({
        number: '0',
        name: '',
        ball: 0,
        strike: 0,
    })

    function setBatter(e, number, name) {
        e.preventDefault()
        setGame({...game, number, name})
    }

    function buttonHandler(e) {
        switch (e.target.name) {
            case 'ball':
                if (game.ball >= 3) setGame({...game, ball:0, strike:0,})
                else setGame({...game, ball: game.ball + 1,})
                break
            case 'strike':
                if (game.strike >= 2) setGame({...game, ball:0, strike:0,})
                else setGame({...game, strike: game.strike + 1,})
                break
            case 'foul':
                if (game.strike <2) setGame({...game, strike: game.strike + 1,})
                break
            case 'hit':
                setGame({...game, ball:0, strike:0,})
                break
            default:
                console.log('buttonHandler, no match')
        }
    }

    return (
        <div className="App">
            <Dashboard onSubmit={setBatter} onButton={buttonHandler} />
        </div>
    );
}

export default App;
