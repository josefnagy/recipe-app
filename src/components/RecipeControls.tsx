import React from 'react';
import { Link } from 'react-router-dom';

const RecipeControls: React.FC = () => {
  return (
    <div className="bg-secondary fixed top-0 right-0  flex rounded-bl-xl">
      <Link
        to={`/recipe/add`}
        className="text-white grid place-items-center hover:bg-primary rounded-bl-xl px-6 py-1 border-r border-tertiary"
      >
        +
      </Link>
      <Link
        to={`/recipe/edit/asdasd`}
        className="text-white grid place-items-center hover:bg-primary px-6 py-1 border-r border-tertiary"
      >
        E
      </Link>
      <Link
        to={`/recipe/delete/asdasd`}
        className="text-white grid place-items-center hover:bg-primary px-6 py-1"
      >
        -
      </Link>
    </div>
  );
};

export default RecipeControls;
