import React, { Fragment } from 'react'

import mealsImage from '../../assets/meal.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton
                    showCartHandler={props.showCartHandler}
                ></HeaderCartButton>
            </header>
            <div>
                <img
                    className={classes['main-image']}
                    src={mealsImage}
                    alt='Just a meal' />
            </div>
        </Fragment>
    )
}

export default Header