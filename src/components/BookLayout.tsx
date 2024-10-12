import { Link, Outlet, useSearchParams } from 'react-router-dom';

const BookLayout: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({ number: '5' });
  const number = searchParams.get('number');

  return (
    <>
      <section className="book-nav-links">
        <ul className="book-nav-group">
          <li className="book-nav-link">
            <Link to="/books/1">Book One</Link>
          </li>
          <li className="book-nav-link">
            <Link to="/books/2">Book Two</Link>
          </li>
          {number && (
            <li className="book-nav-link">
              <Link to={`/books/${number}`}>Book {number}</Link>
            </li>
          )}
          <li className="book-nav-link">
            <Link to="/books/new" state={{ parentComponentName: 'BookLayout' }}>
              New Book
            </Link>
          </li>
        </ul>
      </section>
      {number && (
        <section>
          <input
            type="number"
            value={number}
            title="search-query"
            onChange={(e) => setSearchParams({ number: e.target.value })}
          />
        </section>
      )}
      <section>
        <Outlet context={{ message: 'we can send data from here' }} />
      </section>
    </>
  );
};

export default BookLayout;
