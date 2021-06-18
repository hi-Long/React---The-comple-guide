import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)

  const cartShowingHandler = () => {
    dispatch(uiActions.toggleCart())
  }

  return (
    <button
      className={classes.button}
      onClick={cartShowingHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{items.length}</span>
    </button>
  );
};

export default CartButton;
