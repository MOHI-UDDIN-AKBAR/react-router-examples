import { Route, Routes } from 'react-router-dom';
import CategoryList from '../../components/category/CategoryList';
import { ProductDetails } from '../../components/product';

const CategoryRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CategoryList />} />
      <Route path=":categoryName">
        <Route index element={<CategoryList />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default CategoryRoutes;
