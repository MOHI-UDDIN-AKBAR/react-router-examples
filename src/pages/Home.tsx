import Product from '../components/product/Product';
import { allProducts } from '../data/products/products';

const Home: React.FC = () => {
  return (
    <section className="home-page">
      <div className="products">
        {allProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Home;
