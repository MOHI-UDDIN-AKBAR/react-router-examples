import { useLocation } from 'react-router-dom';

const NewBook: React.FC = () => {
  const { state } = useLocation();
  if (!state) {
    return <div>NewBook page</div>;
  }
  return (
    <div>
      NewBook page
      <h1>{state.parentComponentName}</h1>
    </div>
  );
};

export default NewBook;
