import { useState } from 'react'

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const bind = {
        onChange: e => {
            setValue({ ...value, [e.target.name]: e.target.value })
        }
    }
    return [value, bind]
}

export default useInput