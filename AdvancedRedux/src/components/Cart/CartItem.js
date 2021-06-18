import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch()
  const { id, title, quantity, total, price } = props;

  const addQuantityHandler = () => {
    dispatch(cartActions.updateItem({
      id: id,
      value: 1
    }))
  }

  const minusQuantityHandler = () => {
    if (quantity >= 1) {
      dispatch(cartActions.updateItem({
        id: id,
        value: -1
      }))
    }
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusQuantityHandler}>-</button>
          <button onClick={addQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
