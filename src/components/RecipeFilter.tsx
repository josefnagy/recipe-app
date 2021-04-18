import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import { useAppSelector } from '../hooks';
import { filterRecipes } from '../store/recipes/actions';

const RecipeFilter: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [name, setName] = useState(true);
  const [ingredients, setIngredients] = useState(true);
  const [tags, setTags] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      filterRecipes({ filteredText: searchText, name, ingredients, tags }),
    );
  }, [searchText, name, ingredients, tags]);

  return (
    <div>
      <input
        className="h-7 w-full mr-2 pl-2 text-secondary focus:outline-none focus:ring-2 focus:ring-primary font-light border-b border-secondary"
        name="filter"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Hledej recept"
      />
      <div className="flex justify-between px-2 bg-white font-light text-secondary">
        <label htmlFor="recipe-names">
          <input
            className="mr-1"
            type="checkbox"
            name="recipeNames"
            id="recipe-names"
            checked={name}
            onChange={() => setName(!name)}
          />
          Názvy
        </label>
        <label htmlFor="ingredients">
          <input
            className="mr-1"
            type="checkbox"
            name="ingredients"
            id="ingredients"
            checked={ingredients}
            onChange={() => setIngredients(!ingredients)}
          />
          Ingredience
        </label>
        <label htmlFor="tags">
          <input
            className="mr-1"
            type="checkbox"
            name="tags"
            id="tags"
            checked={tags}
            onChange={() => setTags(!tags)}
          />
          Tagy
        </label>
      </div>
    </div>
  );
};

export default RecipeFilter;
