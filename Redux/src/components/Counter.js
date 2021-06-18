import { useDispatch, useSelector } from 'react-redux'
import classes from './Counter.module.css'
import { counterActions } from '../store/counter'

const Counter = () => {
  const dispatch = useDispatch();
  const { counter, showCounter } = useSelector(state => state.counter)

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment())
  }

  const incrementCounterHandlerBy10 = () => {
    dispatch(counterActions.increase({ value: 10 }))
  }

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {showCounter && <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={incrementCounterHandlerBy10}>Increment by 10</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default (Counter);
