import { Route, Routes } from 'react-router-dom';

const AccountRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<>Accounts</>} />
      <Route path="profile" element={<>Accounts profile</>} />
      <Route path="wishlist" element={<>Accounts wishlist</>} />
      <Route path="orders" element={<>Accounts orders</>} />
    </Routes>
  );
};

export default AccountRoutes;
