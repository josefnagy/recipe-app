import React from 'react';
import { useForm } from 'react-hook-form';

import { Recipe } from '../store/recipes/types';
import IngredientGroup from './IngredientGroup';

const defaultValues = {
  allIngredients: [
    {
      name: '',
      ingredients: [{ name: '', amount: undefined, unit: '', note: '' }],
    },
  ],
};

const RecipeAdd: React.FC = () => {
  const { control, register, handleSubmit } = useForm<Recipe>({
    defaultValues,
  });

  const onSubmit = (data: Recipe) => console.log(data);

  return (
    <div
      id="add-recipe"
      className="flex-auto bg-tertiary p-20 flex flex-col ml-84 h-screen overflow-y-auto"
    >
      <h1 className="text-4xl font-heading uppercase text-primary text-center mb-8">
        Přidej nový recept
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="mb-4 flex">
          <input
            className="rounded-md flex-1 h-7 mr-2 pl-2 focus:outline-none focus:ring-2 focus:ring-primary font-light"
            name="name"
            ref={register}
            type="text"
            placeholder="Název receptu"
          />
          <input
            className="rounded-md  h-7 mr-2 px-2 text-right focus:outline-none focus:ring-2 focus:ring-primary font-light"
            name="cookingTime"
            ref={register}
            type="text"
            placeholder="Čas přípravy"
          />
          <select
            name="difficulty"
            ref={register}
            className="rounded-md  h-7 mr-2 pl-2 focus:outline-none focus:ring-2 focus:ring-primary font-light"
          >
            <option value="easy">Lehká</option>
            <option value="moderate">Střední</option>
            <option value="hard">Těžká</option>
          </select>
          <input
            className="rounded-md  h-7  px-2 text-right focus:outline-none focus:ring-2 focus:ring-primary font-light"
            name="portions"
            ref={register}
            type="text"
            placeholder="Počet porcí"
          />
        </div>

        <textarea
          className="rounded-md w-full h-24 p-2 focus:outline-none focus:ring-2 focus:ring-primary mb-2 font-light"
          name="description"
          id="description"
          ref={register}
          placeholder="Popis receptu"
        ></textarea>
        <input
          className="rounded-md w-full h-7 px-2 focus:outline-none focus:ring-2 focus:ring-primary font-light"
          name="url"
          type="text"
          ref={register}
          placeholder="URL receptu kde si ho ukrad"
        />

        {/* ------ INGREDIENTS------ */}
        <div className="mt-6 flex flex-col">
          <h2 className="text-2xl mb-2">Ingredience:</h2>
          {/* ------ INGREDIENT GROUP ------ */}
          <div className="flex flex-col">
            {/* ------ INGREDIENT GROUP HEADER ------ */}
            <IngredientGroup {...{ control, register, defaultValues }} />
            {/* INGREDIENTS LIST */}
          </div>
        </div>

        {/* BATTLE PLAN */}
        <div>
          <h2 className="text-2xl mb-2">Postup:</h2>
          {/* BATTLE PLAN STEP */}
          <div className="flex">
            <div className="grid w-6 h-6 place-items-center bg-primary rounded-full text-white mr-2">
              1.
            </div>
            <textarea
              className="rounded-md flex-1 h-24 p-2 focus:outline-none focus:ring-2 focus:ring-primary mr-2 mb-2 font-light"
              name="step-1"
              ref={register}
              placeholder="Popis přípravy"
            ></textarea>
            <button>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6L18 18M6 18L18 6L6 18Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <button className="text-center mt-4 ml-8 w-48 border border-primary rounded py-1 px-2 hover:bg-primary hover:text-white">
            Přidat krok postupu
          </button>
        </div>

        <input
          type="submit"
          className="text-center mt-4 ml-8 w-40 border border-primary rounded py-1 px-2 hover:bg-primary hover:text-white self-center"
        />
      </form>
    </div>
  );
};

export default RecipeAdd;
