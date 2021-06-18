import React from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useSelector } from 'react-redux'

const HeaderCartButton = props => {
    const cart = useSelector(state => state.cart.cart)

    return (
        <button
            className={classes.button}
            onClick={props.showCartHandler}
        >
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cart.length}</span>
        </button>
    )
}

export default HeaderCartButton;