import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/navigation';
import { Home, Login, NotFound } from '../pages';
import CategoryRoutes from './category-routes/CategoryRoutes';
import AccountRoutes from './account-routes/AccountRoutes';
import AdminRoutes from './admin-routes/AdminRoutes';
import Footer from '../components/footer/Footer';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <header className="main-header">
        <Navbar />
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/*" element={<CategoryRoutes />} />
          <Route path="/account/*" element={<AccountRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </Router>
  );
};

export default AppRoutes;
