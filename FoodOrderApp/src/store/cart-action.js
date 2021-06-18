import axios from "axios"
import { cartActions } from "./cart-slice"
import { uiActions } from "./ui-slice"

export const mealRequest = cartData => {
    return async dispatch => {
        try {
            const reqConfig = {
                url: 'https://foodorderapp-2c409-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
                method: 'put',
                data: cartData
            }
            console.log(cartData)
            const response = await axios(reqConfig)
        } catch (err) {
            console.log(err)
        }
    }
}

export const fetchMeals = () => {
    return async dispatch => {
        try {
            dispatch(uiActions.setLoading(true))
            const reqConfig = {
                url: 'https://foodorderapp-2c409-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
                method: 'get'
            }
            const response = await axios(reqConfig)
            dispatch(cartActions.setCart(response.data))
            dispatch(uiActions.setLoading(false))
        } catch (err) {
            dispatch(uiActions.setError(err.message))
        }
    }
}
