import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-scroll';

import { Recipe } from '../store/recipes/types';
import { AppState } from '../store';
import { viewRecipe } from '../store/recipes/actions';
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
                  <svg width="55" height="55" viewBox="0 0 55 55" fill="none">
                    <path
                      d="M25.2083 7.00104C21.3479 7.43245 17.6879 8.94511 14.6493 11.3649C11.6107 13.7847 9.31716 17.0133 8.03257 20.6791C6.74799 24.3449 6.52458 28.299 7.38808 32.0862C8.25158 35.8733 10.1669 39.3397 12.9135 42.0864C15.6602 44.8331 19.1266 46.7484 22.9138 47.6119C26.701 48.4754 30.655 48.252 34.3208 46.9674C37.9866 45.6828 41.2152 43.3892 43.635 40.3507C46.0548 37.3121 47.5675 33.652 47.9989 29.7917H25.2083V7.00104Z"
                      stroke="#279037"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M46.9517 20.625H34.375V8.04834C37.2748 9.07713 39.9086 10.74 42.0843 12.9157C44.26 15.0914 45.9229 17.7252 46.9517 20.625V20.625Z"
                      stroke="#279037"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="ml-2">{recipe.portions} porce</div>
              </div>
              <div className="flex items-center">
                <div>
                  <svg
                    width="55"
                    height="55"
                    viewBox="0 0 55 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.625 43.5417V29.7917C20.625 28.5761 20.1421 27.4103 19.2826 26.5508C18.423 25.6912 17.2572 25.2083 16.0417 25.2083H11.4583C10.2428 25.2083 9.07697 25.6912 8.21743 26.5508C7.35789 27.4103 6.875 28.5761 6.875 29.7917V43.5417C6.875 44.7572 7.35789 45.923 8.21743 46.7826C9.07697 47.6421 10.2428 48.125 11.4583 48.125H16.0417C17.2572 48.125 18.423 47.6421 19.2826 46.7826C20.1421 45.923 20.625 44.7572 20.625 43.5417ZM20.625 43.5417V20.625C20.625 19.4094 21.1079 18.2436 21.9674 17.3841C22.827 16.5246 23.9928 16.0417 25.2083 16.0417H29.7917C31.0072 16.0417 32.173 16.5246 33.0326 17.3841C33.8921 18.2436 34.375 19.4094 34.375 20.625V43.5417H20.625ZM20.625 43.5417C20.625 44.7572 21.1079 45.923 21.9674 46.7826C22.827 47.6421 23.9928 48.125 25.2083 48.125H29.7917C31.0072 48.125 32.173 47.6421 33.0326 46.7826C33.8921 45.923 34.375 44.7572 34.375 43.5417H20.625ZM34.375 43.5417V11.4583C34.375 10.2428 34.8579 9.07697 35.7174 8.21743C36.577 7.35789 37.7428 6.875 38.9583 6.875H43.5417C44.7572 6.875 45.923 7.35789 46.7826 8.21743C47.6421 9.07697 48.125 10.2428 48.125 11.4583V43.5417C48.125 44.7572 47.6421 45.923 46.7826 46.7826C45.923 47.6421 44.7572 48.125 43.5417 48.125H38.9583C37.7428 48.125 36.577 47.6421 35.7174 46.7826C34.8579 45.923 34.375 44.7572 34.375 43.5417Z"
                      stroke="#279037"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="ml-2">{recipe.difficulty}</div>
              </div>
              <div className="flex items-center">
                <div>
                  <svg
                    width="55"
                    height="55"
                    viewBox="0 0 55 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.5 18.3333V27.5L34.375 34.375L27.5 18.3333ZM48.125 27.5C48.125 30.2085 47.5915 32.8905 46.555 35.3928C45.5185 37.8952 43.9993 40.1689 42.0841 42.0841C40.1689 43.9993 37.8952 45.5185 35.3928 46.555C32.8905 47.5915 30.2085 48.125 27.5 48.125C24.7915 48.125 22.1095 47.5915 19.6072 46.555C17.1048 45.5185 14.8311 43.9993 12.9159 42.0841C11.0007 40.1689 9.48149 37.8952 8.44498 35.3928C7.40848 32.8905 6.875 30.2085 6.875 27.5C6.875 22.0299 9.04798 16.7839 12.9159 12.9159C16.7839 9.04799 22.0299 6.875 27.5 6.875C32.9701 6.875 38.2161 9.04799 42.0841 12.9159C45.952 16.7839 48.125 22.0299 48.125 27.5Z"
                      stroke="#279037"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
                <svg width="38" height="45" viewBox="0 0 38 45" fill="none">
                  <path
                    d="M17.2322 43.7678C18.2085 44.7441 19.7915 44.7441 20.7678 43.7678L36.6777 27.8579C37.654 26.8816 37.654 25.2986 36.6777 24.3223C35.7014 23.346 34.1184 23.346 33.1421 24.3223L19 38.4645L4.85787 24.3223C3.88155 23.346 2.29864 23.346 1.32233 24.3223C0.346021 25.2986 0.346021 26.8816 1.32233 27.8579L17.2322 43.7678ZM16.5 1.09278e-07L16.5 42L21.5 42L21.5 -1.09278e-07L16.5 1.09278e-07Z"
                    fill="#279037"
                  />
                </svg>
              </Link>
            </div>
            <div className="w-1/3 flex items-end justify-end">
              <ul className="flex flex-col">
                {recipe.tags.map((tag: string, index: number) => (
                  <li key={index}>{tag}</li>
                ))}
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
                      <span className="mr-2">{ingredient.unit}</span>
                      <span className="mr-2">{ingredient.name}</span>
                      {ingredient.note ? <span>({ingredient.note})</span> : ''}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <h3 className="text-xl mt-4 mb-4">Postup:</h3>
          <div className="font-light">
            {recipe.battlePlan.map((step, index) => (
              <div key={index}>
                <span className="inline-block text-center w-7 h-7 rounded-full border-solid border-2 border-primary mr-2">
                  {index + 1}.{' '}
                </span>
                {step}
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
    <div className="bg-tertiary ml-84 ">
      <section className="flex flex-col p-20 h-screen">
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
