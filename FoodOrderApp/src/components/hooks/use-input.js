import { useState } from "react"

const useInput = validation => {
    const [isTouched, setIsTouched] = useState(false)
    const [inputVal, setInputVal] = useState('')

    const inputIsValid = validation(inputVal) && isTouched

    const inputValueHandler = event => {
        setInputVal(event.target.value)
    }

    const inputTouchHandler = () => {
        setIsTouched(true)
    }

    return { inputVal, inputIsValid, inputValueHandler, inputTouchHandler }
}

export default useInput