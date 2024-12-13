import { Link } from 'react-router-dom';
import { CategoryType } from '../../types';

type CategoryProps = {
  categories: CategoryType[];
};

const Category: React.FC<CategoryProps> = ({ categories }) => {
  return (
    <>
      {categories.map(({ name, id }) => (
        <Link to={`/category/${name}`} className="category-link" key={id}>
          <span className="category-name">{name}</span>
        </Link>
      ))}
    </>
  );
};

export default Category;
