import useInput from "../hooks/use-input";

const validateName = name => {
  return name.trim() !== ''
}

const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const BasicForm = (props) => {
  const {
    enteredValue: firstName,
    inputIsValid: firstNameIsValid,
    className: firstNameClassName,
    inputChangedHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler } = useInput(validateName)
  const { enteredValue: lastName,
    inputIsValid: lastNameIsValid,
    className: lastNameClassName,
    inputChangedHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler } = useInput(validateName)
  const { enteredValue: email,
    inputIsValid: emailIsValid,
    className: emailClassName,
    inputChangedHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler } = useInput(validateEmail)

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formSubmitHandler = event => {
    event.preventDefault()
    if (formIsValid) {
      console.log(firstName, lastName, email)
    }
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input
            type='text' id='name'
            value={firstName}
            className={firstNameClassName}
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text' id='name'
            value={lastName}
            className={lastNameClassName}
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text' id='name'
          value={email}
          className={emailClassName}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className='form-actions'>
        <button disabled={formIsValid} style={{ background: formIsValid ? 'royalblue' : 'indianred' }}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
