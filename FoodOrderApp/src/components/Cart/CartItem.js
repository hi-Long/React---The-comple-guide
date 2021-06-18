import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { mealRequest } from '../../store/cart-action';
import { cartActions } from '../../store/cart-slice';
import useHttp from '../hooks/use-http';
import classes from './CartItem.module.css';

let initialization = true

const CartItem = (props) => {
  const dispatch = useDispatch()
  let { amount, name, price } = { ...props }
  const cart = useSelector(state => state.cart.cart)
  price = `$${parseFloat(props.price).toFixed(2)}`;

  // useEffect(() => {
  //   const reqConfig = {
  //     url: 'https://foodorderapp-2c409-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
  //     method: 'put',
  //     data: cart
  //   }
  //   sendRequest(reqConfig)
  // }, [cart, sendRequest])

  useEffect(() => {
    if (!initialization) {
      dispatch(mealRequest(cart))
      initialization = true
    }
  })

  const onRemoveAmountHandler = () => {
    initialization = false
    dispatch(cartActions.changeMealAmount({
      name: name,
      type: 'remove'
    }))
  }

  const onAddAmountHandler = () => {
    initialization = false
    dispatch(cartActions.changeMealAmount({
      name: name,
      type: 'add'
    }))
  }

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemoveAmountHandler}>−</button>
        <button onClick={onAddAmountHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
