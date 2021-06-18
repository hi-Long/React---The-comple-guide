import classes from "./Todos.module.css"
import Todo from "../models/todo"
import Task from "./Task"

const Todos: React.FC<{ items: Todo[], onRemoveTodo: (id: string) => void }> = props => {
    const items = props.items

    return (
        <ul className={classes.todos}>
            {items.map(i => <Task key={i.id} {...i} onRemoveTodo={props.onRemoveTodo}></Task>)
            }
        </ul >
    )
}

export default Todos