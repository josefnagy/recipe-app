import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import { Recipe } from '../store/recipes/types';
import IngredientGroup from './IngredientGroup';

const defaultValues = {
  allIngredients: [
    {
      name: '',
      ingredients: [{ name: '', amount: undefined, unit: '', note: '' }],
    },
  ],
  battlePlan: [{ step: '' }],
};

const RecipeAdd: React.FC = () => {
  const { control, register, handleSubmit, errors } = useForm<Recipe>({
    defaultValues,
    mode: 'onBlur',
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'battlePlan',
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
        <div className="mb-4 flex relative">
          <label
            htmlFor="name"
            className="text-indigo-900 font-light absolute bottom-7"
          >
            {errors.name &&
              'Recept musí mít nějaký název a mít mezi 3 až 60 znaky'}
          </label>
          <input
            className="rounded-md flex-1 h-7 mr-2 pl-2 focus:outline-none focus:ring-2 focus:ring-primary font-light"
            name="name"
            ref={register({ required: true, minLength: 3, maxLength: 60 })}
            type="text"
            placeholder="Název receptu"
          />
          <input
            className="rounded-md  h-7 mr-2 px-2 text-right focus:outline-none focus:ring-2 focus:ring-primary font-light"
            name="cookingTime"
            ref={register}
            type="number"
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
          <label
            htmlFor="portions"
            className="text-indigo-900 font-light absolute bottom-7 right-0"
          >
            {errors.portions && 'Porcí musí být od 1 do 20'}
          </label>
          <input
            className="rounded-md  h-7  px-2 text-right focus:outline-none focus:ring-2 focus:ring-primary font-light"
            name="portions"
            ref={register({ min: 1, max: 20 })}
            type="number"
            placeholder="Počet porcí"
          />
        </div>

        <label htmlFor="description" className="text-indigo-900 font-light">
          {errors.description &&
            'Recept musí mít nějaký popis a mít mezi 5 a 400 znaky'}
        </label>
        <textarea
          className="rounded-md w-full h-24 p-2 focus:outline-none focus:ring-2 focus:ring-primary mb-2 font-light"
          name="description"
          id="description"
          ref={register({ required: true, minLength: 5, maxLength: 400 })}
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
          <div className="flex flex-col">
            <IngredientGroup
              {...{ control, register, errors, defaultValues }}
            />
          </div>
        </div>

        {/* BATTLE PLAN */}
        <div>
          <h2 className="text-2xl mb-2">Postup:</h2>
          {/* BATTLE PLAN STEP */}
          {fields.map((step, index) => {
            return (
              <div className="flex relative flex-col" key={step.id}>
                <label
                  htmlFor={`battlePlan[${index}].step`}
                  className="text-indigo-900 font-light ml-9"
                >
                  {errors.battlePlan
                    ? errors.battlePlan[index] &&
                      'Recept musí mít nějaký popis a mít mezi 5 a 400 znaky'
                    : ''}
                </label>
                <div className="flex w-full">
                  <div className="grid w-6 h-6 place-items-center bg-primary rounded-full text-white mr-2">
                    {`${index + 1}.`}
                  </div>
                  <textarea
                    className="rounded-md w-full h-24 p-2 focus:outline-none focus:ring-2 focus:ring-primary mr-2 mb-2 font-light"
                    name={`battlePlan[${index}].step`}
                    ref={register({
                      required: true,
                      minLength: 5,
                      maxLength: 500,
                    })}
                    defaultValue={step.step}
                    placeholder="Popis přípravy"
                  ></textarea>
                  <button type="button" onClick={() => remove(index)}>
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
              </div>
            );
          })}
          <button
            type="button"
            onClick={() => append({ step: '' })}
            className="text-center mt-4 ml-8 w-48 border border-primary rounded py-1 px-2 hover:bg-primary hover:text-white"
          >
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
