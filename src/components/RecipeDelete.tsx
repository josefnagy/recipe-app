import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Recipe } from '../store/recipes/types';
import { deleteRecipe } from '../store/recipes/actions';
import { Modal } from './Modal';
import history from '../history';

interface RecipeDeleteProps {
  match: {
    params: {
      id: Recipe['id'];
    };
  };
}

const RecipeDelete: React.FC<RecipeDeleteProps> = ({ match }) => {
  const dispatch = useDispatch();

  const renderContent = () => {
    return (
      <div>
        This Recipe will be deleted.
        <p>Are you sure?</p>
      </div>
    );
  };

  const renderActions = () => {
    const { id } = match.params;
    return (
      <>
        <button
          className="w-full py-2 hover:bg-red-600 border-t border-r border-primary"
          onClick={() => dispatch(deleteRecipe(id))}
        >
          Delete
        </button>
        <Link
          to="/"
          className="w-full text-center py-2 hover:bg-primary border-t border-primary"
        >
          Cancel
        </Link>
      </>
    );
  };

  return (
    <div className="flex-auto bg-tertiary p-20 flex flex-col ml-84">
      <Modal
        title="Delete Recipe"
        content={renderContent()}
        actions={renderActions()}
        onDismiss={() => history.push('/')}
      />
    </div>
  );
};

export default RecipeDelete;
