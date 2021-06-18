import axios from "axios"
import { cartActions } from "./cart-slice"
import { uiActions } from "./ui-slice"

export const fetchCartData = () => {
    return async dispatch => {
        const fetchRequest = async () => {
            const responseObj = await axios.get('https://redax-advanced-default-rtdb.firebaseio.com/cart.json')
            if (responseObj.status !== 200) {
                dispatch(uiActions.setNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Fetching cart data fail.'
                }))
            } else {
                return responseObj.data

            }
        }
        try {
            const responseData = await fetchRequest()
            console.log(responseData)
            dispatch(cartActions.addItem(responseData))
        } catch (err) {
            dispatch(uiActions.setNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data fail.'
            }))
        }
    }
}

export const sendCartData = cartData => {
    return async (dispatch) => {
        dispatch(uiActions.setNotification({
            status: 'pending',
            title: 'Sending',
            message: 'Sending cart data.'
        }))

        const sendRequest = async () => {
            const response = await axios.post('https://redax-advanced-default-rtdb.firebaseio.com/cart.json',
                cartData)

            if (!response.ok) {
                dispatch(uiActions.setNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data fail.'
                }))
            }
        }
        try {
            await sendRequest()
            dispatch(uiActions.setNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sending cart data successfully.'
            }))
        } catch (err) {
            dispatch(uiActions.setNotification({
                status: 'error',
                title: 'Error',
                message: 'Sending cart data failed.'
            }))
        }
    }
}