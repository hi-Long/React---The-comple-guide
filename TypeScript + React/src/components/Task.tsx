import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react'
import classes from './Task.module.css'

const Task: React.FC<{ id: string, text: string, onRemoveTodo: (id: string) => void }> = props => {
    return (
        <li className={classes.item} onClick={props.onRemoveTodo(props.id)}>{props.text}</li>
    )
}

export default Task