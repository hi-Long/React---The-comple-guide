import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import Checkout from './Checkout'

const Cart = props => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)
    const onCheckout = useSelector(state => state.ui.onCheckout)

    const cartItems = <ul className={classes['cart-item']}>
        {cart.map(item => <CartItem key={item.name} {...item}> {item.name}</CartItem>)}
    </ul >

    const totalAmount = cart.map(m => m.amount * m.price).reduce((a, b) => a + b, 0)

    const orderHandler = () => {
        dispatch(uiActions.setOnCheckout(true))
    }

    const closeHandler = () => {
        props.hideCartHandler()
        dispatch(uiActions.setOnCheckout(false))
    }

    return (
        <Modal onClose={props.hideCartHandler}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {onCheckout && <Checkout></Checkout>}
            <div className={classes.actions}>
                {!onCheckout && <Fragment>
                    <button
                        className={classes['button--alt']}
                        onClick={closeHandler}
                    >Close</button>
                    <button
                        className={classes.button}
                        onClick={orderHandler}
                        disabled={totalAmount === 0}
                    >Order</button>
                </Fragment>}
            </div>
        </Modal>
    )
}

export default Cart