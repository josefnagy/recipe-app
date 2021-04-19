import React from 'react';
import { Link } from 'react-router-dom';

import { Recipe } from '../store/recipes/types';
import { useAppSelector } from '../hooks';

interface RecipeControlsProps {
  id: Recipe['id'] | undefined;
}

const RecipeControls: React.FC<RecipeControlsProps> = ({ id }) => {
  const user = useAppSelector((state) => state.auth.user);

  if (user) {
    if (id) {
      return (
        <div className="bg-secondary fixed top-0 right-0  flex rounded-bl-xl">
          <Link
            to={`/recipe/add`}
            className="text-white grid place-items-center hover:bg-primary rounded-bl-xl px-6 py-1 border-r border-tertiary"
          >
            +
          </Link>
          <Link
            to={`/recipe/edit/${id}`}
            className="text-white grid place-items-center hover:bg-primary px-6 py-1 border-r border-tertiary"
          >
            E
          </Link>
          <Link
            to={`/recipe/delete/${id}`}
            className="text-white grid place-items-center hover:bg-primary px-6 py-1"
          >
            -
          </Link>
        </div>
      );
    } else
      return (
        <div className="bg-secondary fixed top-0 right-0  flex rounded-bl-xl">
          <Link
            to={`/recipe/add`}
            className="text-white grid place-items-center hover:bg-primary rounded-bl-xl px-6 py-1 border-r border-tertiary"
          >
            +
          </Link>
        </div>
      );
  }
  return <></>;
};

export default RecipeControls;
