import { Link } from 'react-router-dom';
import { ProductType } from '../../types';

type ProductProps = {
  product: ProductType;
};

const Product: React.FC<ProductProps> = ({
  product: { category, id, name, price },
}) => {
  return (
    <Link to={`/category/${category}/product/${id}`} className="product-card">
      <h4 className="product-name">Name: {name}</h4>
      <p className="product-price">price: ${price}</p>
    </Link>
  );
};

export default Product;
