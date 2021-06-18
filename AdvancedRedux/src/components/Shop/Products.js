import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  { title: 'My first book', price: 7, description: 'The first book ever !' },
  { title: 'My second book', price: 10, description: 'The second book ever !' },
  { title: 'My third book', price: 17, description: 'The third book ever !' }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map(p => (
          <ProductItem {...p} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
