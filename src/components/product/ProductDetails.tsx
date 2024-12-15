import { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../../data/products/products';
import { ProductType } from '../../types';

type ParamsType = {
  categoryName: string;
  productId: string;
};

const ProductDetails: React.FC = () => {
  const { categoryName, productId } = useParams<ParamsType>();
  const [product, setProduct] = useState<ProductType>();
  useLayoutEffect(() => {
    if (!categoryName || !productId) {
      setProduct(undefined);
      return;
    }
    setProduct(() =>
      allProducts.find(
        ({ category, id }) =>
          !!(category === categoryName && id.toString() === productId)
      )
    );
  }, [categoryName, productId]);

  if (!product) {
    return <p>Product not found with the given category and product ID.</p>;
  }

  return (
    <section className="product-details">
      <div className="product-card">
        <h3 className="product-name">Name: {product.name}</h3>
        <p className="product-description">
          Description : {product.description}
        </p>
        <p className="product-info">Details: {product.details}</p>
        <span className="product-price">Price: ${product.price}</span>
      </div>
    </section>
  );
};

export default ProductDetails;
