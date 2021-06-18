import classes from "./NewToDo.module.css"
import React, { useRef } from "react"

const NewToDo: React.FC<{ onAddToDo: (text: string) => void }> = props => {
    const inputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredInput = inputRef.current!.value

        if (enteredInput!.trim().length === 0) {
            return
        }

        props.onAddToDo(enteredInput)
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor='text'>Todo text</label>
        <input id='text' type='text' ref={inputRef}></input>
        <button>Add Todo</button>
    </form>
}

export default NewToDo