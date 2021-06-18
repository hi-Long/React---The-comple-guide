import { useReducer, useState } from "react"

const initialInputState = {
    enteredValue: '',
    inputTouch: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "INPUT":
            return { ...state, enteredValue: action.value }
        case "TOUCH":
            return { ...state, inputTouch: action.value }
        default:
            return state
    }
}

const useInput = validationFunc => {
    // const [enteredValue, setEnteredValue] = useState('')
    // const [inputTouch, setInputTouch] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialInputState)

    const { enteredValue, inputTouch } = { ...state }

    const validateInput = validationFunc(enteredValue)
    const inputIsValid = validateInput && inputTouch
    const className = inputIsValid ? 'input' : 'input--invalid'

    const inputChangedHandler = event => {
        dispatch({ type: 'INPUT', value: event.target.value })
    }

    const inputBlurHandler = () => {
        dispatch({ type: 'TOUCH', value: true })
    }

    return { enteredValue, inputIsValid, className, inputChangedHandler, inputBlurHandler }
}

export default useInput