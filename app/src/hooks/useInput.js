import React from 'react'

function useInput() {
    const [input, setInput] = React.useState('')

    function onChange(e) {
        setInput(e.target.value)
    }

    return [input, onChange]
}

export default useInput