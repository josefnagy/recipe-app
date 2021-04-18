import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { useOutsideClick } from '../hooks';
import { filterRecipes } from '../store/recipes/actions';

const RecipeFilter: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [name, setName] = useState(true);
  const [ingredients, setIngredients] = useState(true);
  const [tags, setTags] = useState(true);
  const [touched, setTouched] = useState(false);

  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  useOutsideClick(filterRef, () => {
    setTouched(false);
  });

  useEffect(() => {
    dispatch(
      filterRecipes({ filteredText: searchText, name, ingredients, tags }),
    );
  }, [searchText, name, ingredients, tags]);

  const renderOptions = () => (
    <div
      className="flex justify-between px-2 py-1 bg-white font-light text-secondary"
      ref={optionsRef}
    >
      <label htmlFor="recipe-names" className="flex items-center">
        <input
          ref={inputRef}
          className="mr-1 border border-primary w-4 h-4 rounded"
          type="checkbox"
          name="recipeNames"
          id="recipe-names"
          checked={name}
          onChange={() => setName(!name)}
        />
        Názvy
      </label>
      <label htmlFor="ingredients" className="flex items-center">
        <input
          className="mr-1 border border-primary w-4 h-4 rounded"
          type="checkbox"
          name="ingredients"
          id="ingredients"
          checked={ingredients}
          onChange={() => setIngredients(!ingredients)}
        />
        Ingredience
      </label>
      <label htmlFor="tags" className="flex items-center">
        <input
          className="mr-1 border border-primary w-4 h-4 rounded"
          type="checkbox"
          name="tags"
          id="tags"
          checked={tags}
          onChange={() => setTags(!tags)}
        />
        Tagy
      </label>
    </div>
  );

  return (
    <div ref={filterRef}>
      <input
        className="h-10 w-full mr-2 pl-2 text-secondary focus:outline-none focus:shadow-md focus:ring-primary font-light border-b border-tertiary"
        name="filter"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setTouched(true)}
        placeholder="Hledej recept"
      />
      {touched && renderOptions()}
    </div>
  );
};

export default RecipeFilter;
