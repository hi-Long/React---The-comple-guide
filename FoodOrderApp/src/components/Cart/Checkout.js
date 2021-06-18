import { useDispatch, useSelector } from 'react-redux'
import { mealRequest } from '../../store/cart-action'
import { cartActions } from '../../store/cart-slice'
import { uiActions } from '../../store/ui-slice'
import useHttp from '../hooks/use-http'
import useInput from '../hooks/use-input'
import classes from './Checkout.module.css'

const textInputValidator = inputVal => {
    return inputVal.trim() !== ''
}

const postalCodeInputValidator = postalCode => {
    return postalCode !== 0 && /^\d+$/.test(postalCode);
}

const Checkout = props => {
    const dispatch = useDispatch()
    const { isLoading, error, sendRequest } = useHttp()
    const cart = useSelector(state => state.cart.cart)

    const {
        inputVal: name,
        inputIsValid: nameIsValid,
        inputValueHandler: nameInputHandler,
        inputTouchHandler: nameTouchedHandler } = useInput(textInputValidator)
    const {
        inputVal: street,
        inputIsValid: streetIsValid,
        inputValueHandler: streetInputHandler,
        inputTouchHandler: streetTouchedHandler } = useInput(textInputValidator)
    const {
        inputVal: postalCode,
        inputIsValid: postalCodeIsValid,
        inputValueHandler: postalCodeInputHandler,
        inputTouchHandler: postalCodeTouchedHandler } = useInput(postalCodeInputValidator)
    const {
        inputVal: city,
        inputIsValid: cityIsValid,
        inputValueHandler: cityInputHandler,
        inputTouchHandler: cityTouchedHandler } = useInput(textInputValidator)

    const cancelHandler = () => {
        dispatch(uiActions.setOnCheckout(false))
    }

    const submitHandler = event => {
        event.preventDefault()
        const reqConfig = {
            method: 'post',
            url: 'https://foodorderapp-2c409-default-rtdb.asia-southeast1.firebasedatabase.app/order.json',
            data: {
                cart,
                orderInfo: { name, street, city, postalCode }
            }
        }
        sendRequest(reqConfig)
        dispatch(cartActions.setCart([]))
        dispatch(uiActions.toggleCart(false))
        dispatch(mealRequest([]))
    }

    const formIsValid = nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid
    
    return <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
            <label htmlFor='name'>Your name</label>
            <input
                type='text' id='name'
                value={name}
                onChange={nameInputHandler}
                onBlur={nameTouchedHandler}
            ></input>
            {!nameIsValid && <p style={{ color: 'indianred' }}>Invalid</p>}
        </div>
        <div className={classes.control}>
            <label htmlFor='street'>Street</label>
            <input
                type='text' id='street'
                value={street}
                onChange={streetInputHandler}
                onBlur={streetTouchedHandler}></input>
            {!streetIsValid && <p style={{ color: 'indianred' }}>Invalid</p>}
        </div>
        <div className={classes.control}>
            <label htmlFor='postal'>Postal Code</label>
            <input
                type='text' id='postal'
                value={postalCode}
                onChange={postalCodeInputHandler}
                onBlur={postalCodeTouchedHandler}></input>
            {!postalCodeIsValid && <p style={{ color: 'indianred' }}>Invalid</p>}
        </div>
        <div className={classes.control}>
            <label htmlFor='city'>City</label>
            <input
                type='text' id='city'
                value={city}
                onChange={cityInputHandler}
                onBlur={cityTouchedHandler}></input>
            {!cityIsValid && <p style={{ color: 'indianred' }}>Invalid</p>}
        </div>
        <div className={classes.actions}>
            <button onClick={cancelHandler}>Cancel</button>
            <button disabled={!formIsValid} style={{ color: formIsValid ? 'indianred' : 'gray', cursor: !formIsValid ? 'not-allowed' : 'pointer' }}>Confirm</button>
        </div>
    </form>
}

export default Checkout