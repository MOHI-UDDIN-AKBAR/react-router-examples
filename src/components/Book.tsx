import { useOutletContext, useParams } from 'react-router-dom';

const Book: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { message } = useOutletContext<{ message: string }>();
  return (
    <div>
      Book
      <p>id: {id}</p>
      {message && (
        <p className="context-message">Message From Context {message}</p>
      )}
    </div>
  );
};

export default Book;
