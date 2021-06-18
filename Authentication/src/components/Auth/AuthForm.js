import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const dispatch = useDispatch()
  const { email, password, error } = useSelector(state => state)
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    dispatch(authActions.setError(null))
    setIsLogin((prevState) => !prevState);
  };

  const emailInputHandler = event => {
    dispatch(authActions.setEmail(event.target.value))
  }

  const passwordInputHandler = event => {
    dispatch(authActions.setPassword(event.target.value))
  }

  const submitHandler = async event => {
    dispatch(authActions.setError(null))
    event.preventDefault()
    try {
      const authRequest = await axios({
        method: 'post',
        url: isLogin ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCHG5JfvharCvc_0DJBGhrPhsshYYuP-zo`
          : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCHG5JfvharCvc_0DJBGhrPhsshYYuP-zo`,
        data: { email, password }
      })
      // if (authRequest.status !== 200) {
      console.log(authRequest)
      // }
      const { idToken, refreshToken, expiresIn } = authRequest.data
      dispatch(authActions.setIdToken(idToken))
      dispatch(authActions.setRefreshToken(refreshToken))
      dispatch(authActions.setExpiresIn(expiresIn))
      
    } catch (err) {
      console.log(err)
      // dispatch(authActions.setError(err))
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email' id='email' required
            onChange={emailInputHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password' id='password' required
            onChange={passwordInputHandler}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
        {error && <p style={{ padding: "0.5rem", color: 'indianred', background: 'white', borderRadius: '5px' }}>{error}</p>}
      </form>
    </section>
  );
};

export default AuthForm;
