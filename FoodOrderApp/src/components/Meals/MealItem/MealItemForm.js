import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mealRequest } from '../../../store/cart-action'
import { cartActions } from '../../../store/cart-slice'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

let initialization = true

const MealItemForm = props => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)
    const mealItem = { ...props.meal }
    const [amount, setAmount] = useState(1)

    useEffect(() => {
        if (!initialization) {
            console.log('Buggy')
            dispatch(mealRequest(cart))
            initialization = true
        }
    }, [cart, dispatch])

    const addToCartHandler = (event) => {
        initialization = false
        event.preventDefault()
        const newCartItem = {
            ...mealItem,
            amount: amount
        }
        dispatch(cartActions.addToCart(newCartItem))
    }

    return (
        <form
            className={classes.form}
            onSubmit={addToCartHandler}>
            <Input
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    value: amount
                }}
                inputChangeHandler={setAmount}></Input>
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm