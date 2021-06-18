import classes from './MealsSummary.module.css'

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious food delivered to you</h2>
            <p>
                Choose your favorite meal from our board selection of available meals and enjoy delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chiefs!
            </p>
        </section>
    )
}

export default MealsSummary