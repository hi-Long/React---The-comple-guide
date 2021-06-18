import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import axios from 'axios';
import { uiActions } from './store/ui-slice';
import { fetchCartData, sendCartData } from './store/cart-slice';

let isInitial = true

function App() {
  const dispatch = useDispatch()
  const cartShowing = useSelector(state => state.ui.cartIsVisible)
  const items = useSelector(state => state.cart.items)
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }
    dispatch(sendCartData(items))
  }, [items, dispatch])

  return (
    <Fragment>
      {notification && <Notification {...notification}></Notification>}
      <Layout>
        {cartShowing && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
