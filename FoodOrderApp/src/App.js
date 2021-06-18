import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { fetchMeals } from "./store/cart-action";
import { uiActions } from "./store/ui-slice";

function App() {
  const dispatch = useDispatch()
  const { cartIsShown, isLoading, error } = useSelector(state => state.ui)

  useEffect(() => {
    dispatch(fetchMeals())
  }, [dispatch])

  const showCartHandler = () => {
    dispatch(uiActions.toggleCart(true))
  }

  const hideCartHandler = () => {
    dispatch(uiActions.toggleCart(false))
  }

  const meals = error === null && !isLoading && <Meals></Meals>

  return (
    <Fragment>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler}></Cart>}
      <Header
        showCartHandler={showCartHandler}
      ></Header>
      <main>
        {error !== null && <section style={{ textAlign: 'center', color: 'white' }}><p>Some errors happened ...</p></section>}
        {isLoading && error === null && <section section style={{ textAlign: 'center', color: 'white' }}><p>Loading ...</p></section>}
        {meals}
      </main>
    </Fragment >
  );
}

export default App;
