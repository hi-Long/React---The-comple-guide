import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Layout = (props) => {

  return (
    <Fragment>
      <MainHeader
        cartOnViewingHandler={props.cartOnViewingHandler} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
