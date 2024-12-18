import { Route, Routes } from 'react-router-dom';

const AdminRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<h1>Admin</h1>} />
      <Route path="products" element={<h1> admin Products</h1>} />
      <Route path="users" element={<h1> admin users</h1>} />
      <Route path="orders" element={<h1> admin orders</h1>} />
    </Routes>
  );
};

export default AdminRoutes;
