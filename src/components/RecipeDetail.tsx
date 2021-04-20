import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-scroll';

import { Recipe } from '../store/recipes/types';
import { AppState } from '../store';
import { viewRecipe } from '../store/recipes/actions';
import RecipeControls from './RecipeControls';
import { ArrowDownSVG, PieSVG, GraphSVG, TimeSVG } from '../svg';
interface RecipeDetailProps {
  match: {
    params: {
      id: Recipe['id'];
    };
  };
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ match }) => {
  const dispatch = useDispatch();
  const recipe: Recipe | null = useSelector(
    (state: AppState) => state.recipes.selectedRecipe,
  );

  useEffect(() => {
    dispatch(viewRecipe(match.params.id));
  }, [dispatch, match.params.id]);

  const renderRecipeInfo = () => {
    if (recipe) {
      return (
        <>
          <RecipeControls id={match.params.id} />
          <div className="flex items-end justify-center flex-col h-full">
            <h2 className="text-7xl font-heading self-start">{recipe.name}</h2>
            <p className="w-1/2  mt-14 border-l-4 pl-3 border-primary font-light">
              {recipe.description}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="w-1/3">
              <div className="flex items-center">
                <div>
                  <PieSVG />
                </div>
                <div className="ml-2">{recipe.portions} porce</div>
              </div>
              <div className="flex items-center">
                <div>
                  <GraphSVG />
                </div>
                <div className="ml-2">
                  {recipe.difficulty === 'easy' && 'Lehká'}
                  {recipe.difficulty === 'moderate' && 'Střední'}
                  {recipe.difficulty === 'hard' && 'Těžká'}
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <TimeSVG />
                </div>
                <div className="ml-2">
                  <span>Cooking Time: </span>
                  {recipe.cookingTime} min
                </div>
              </div>
            </div>
            <div className="self-end w-1/3 flex justify-center">
              <Link
                className="cursor-pointer"
                to="recipeDetail"
                smooth={true}
                duration={1000}
              >
                <ArrowDownSVG />
              </Link>
            </div>
            <div className="w-1/3 flex items-end justify-end">
              <ul className="flex flex-col">
                {typeof recipe.tags !== 'undefined'
                  ? recipe.tags.map((tag: string, index: number) => (
                      <li key={index}>{tag}</li>
                    ))
                  : ''}
              </ul>
            </div>
          </div>
        </>
      );
    }
  };

  const renderRecipeDetails = () => {
    if (recipe) {
      return (
        <>
          <h2 className="text-4xl font-heading text-center underline uppercase text-primary mb-6">
            {recipe.name}
          </h2>
          <h3 className="text-xl mb-4">Ingredience:</h3>
          <div className="flex justify-around">
            {recipe.allIngredients.map((ingGroup, index) => (
              <div
                key={index}
                className="bg-secondary rounded-md text-white font-thin mr-4 p-2 text-lg w-1/3"
              >
                <h4 className="uppercase font-medium">{ingGroup.name}</h4>
                <ul>
                  {ingGroup.ingredients.map((ingredient, index) => (
                    <li key={index}>
                      • <span className="mr-2">{ingredient.amount}</span>
                      <span className="mr-2 italic">{ingredient.unit}</span>
                      <span className="mr-2">{ingredient.name}</span>
                      {ingredient.note ? <span>({ingredient.note})</span> : ''}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <h3 className="text-xl mt-4 mb-4">Postup:</h3>
          <div className="font-light pl-14 pr-20 text-justify">
            {recipe.battlePlan.map((step, index) => (
              <div key={index} className="mb-6 flex">
                <span className="inline-block text-center w-7 h-7 rounded-full border-solid border-2 border-primary mr-2">
                  {index + 1}.{' '}
                </span>
                <div className="flex-1">{step.step}</div>
              </div>
            ))}
          </div>
          <h3 className="text-xl mt-4 mb-2">Dojmy:</h3>
          <p className="font-light">{recipe.notes}</p>
          <a
            href={recipe.url}
            target="_blank"
            rel="noreferrer"
            className="mt-6 rounded-md bg-primary px-2 w-1/5 text-center py-1"
          >
            Odkaz na zdroj
          </a>
        </>
      );
    }
  };

  return (
    <div className="bg-tertiary ml-84 w-full">
      <section className="flex flex-col p-20 h-screen w-auto">
        {renderRecipeInfo()}
      </section>
      <section
        className="flex flex-col p-20 h-screen bg-tertiary"
        id="recipeDetail"
      >
        {/* <p className="h-full grid place-items-center">test</p> */}
        {renderRecipeDetails()}
      </section>
    </div>
  );
};

export default RecipeDetail;
