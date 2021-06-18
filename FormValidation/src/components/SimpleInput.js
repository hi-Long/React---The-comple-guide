import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouch, setEnteredNameTouch] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch

  const nameInputChangedHandler = event => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouch(true)
  }

  const formSubmissionHandler = event => {
    event.preventDefault()

    if (!enteredNameIsValid) {
      return
    }

    console.log(enteredName)
    setEnteredName('')
    setEnteredNameTouch(false)
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control valid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text' id='name'
          onChange={nameInputChangedHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && <p style={{ color: 'red' }}>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
