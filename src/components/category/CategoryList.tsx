import { useParams } from 'react-router-dom';
import { productCategories } from '../../data/categories/product-categories';
import { allProducts } from '../../data/products/products';
import Product from '../product/Product';
import Category from './Category';
import { useMemo } from 'react';

const CategoryList: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  const filteredProducts = useMemo(() => {
    if (!categoryName) return allProducts;
    return allProducts.filter((product) => product.category === categoryName);
  }, [categoryName]);

  return (
    <section className="categories">
      <div className="category-type">
        <Category categories={productCategories} />
      </div>
      <div className="products">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <Product product={product} key={product.id} />
          ))
        ) : (
          <p>Oops! No Products found in this category.</p>
        )}
      </div>
    </section>
  );
};

export default CategoryList;
