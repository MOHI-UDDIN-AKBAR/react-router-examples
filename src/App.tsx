import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Contact, Service } from './pages';
import { Banner, NavBar, NotFound } from './components';
import './style.css';
import { BookLayoutRoutes } from './routes';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <header>
        <NavBar />
        <section>
          <Routes>
            <Route path="/" element={<Banner />} />
          </Routes>
        </section>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/*" element={<BookLayoutRoutes />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </React.Fragment>
  );
};

export default App;
