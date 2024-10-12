import { Route, Routes } from 'react-router-dom';
import {
  Book,
  BookLayout,
  NewBook,
  NotFound,
  PrivateRoute,
} from '../components';
import { BookList } from '../pages';

const BookLayoutRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<BookLayout />}>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route
          path="new"
          element={
            <PrivateRoute isAuthenticated={true}>
              <NewBook />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path=":id/*" element={<NotFound />} />
    </Routes>
  );
};

export default BookLayoutRoutes;
