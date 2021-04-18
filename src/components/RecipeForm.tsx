import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useAppSelector } from '../hooks';

import { Recipe } from '../store/recipes/types';
import Tags from './Tags/Tags';
import IngredientGroup from './IngredientGroup';
import { RemoveSVG, WarningSVG, LoadingSVG } from '../svg';

interface RecipeFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValues: any;
  onSubmit: (recipe: Recipe) => void;
}

const initialTags: string[] = [];

const RecipeForm: React.FC<RecipeFormProps> = ({ defaultValues, onSubmit }) => {
  // const defaultTags
  const [tags, setTags] = useState(
    defaultValues.tags ? defaultValues.tags : initialTags,
  );

  const loading = useAppSelector((state) => state.recipes.loading);
  const error = useAppSelector((state) => state.recipes.error);

  useEffect(() => {
    if (error) {
      // handle Firebase Error some way ...
    }
  }, [error]);

  const addTag = (tag: string) => {
    setTags((tags: string[]) => [...tags, tag]);
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((item: string) => item !== tag));
  };

  const { control, register, handleSubmit, errors } = useForm<Recipe>({
    defaultValues,
    mode: 'onBlur',
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'battlePlan',
  });

  const onEnhancedSubmit = (data: Recipe) => {
    if (tags.length > 0) data.tags = tags;

    onSubmit(data);
  };

  return (
    <div
      id="add-recipe"
      className="flex-auto bg-tertiary p-20 flex flex-col ml-84 h-screen overflow-y-auto"
    >
      <h1 className="text-4xl font-heading uppercase text-primary text-center mb-8">
        {defaultValues.name ? 'Upravit recept' : 'Přidej nový recept'}
      </h1>
      {loading ? (
        <div className="grid place-items-center h-full">
          <LoadingSVG />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onEnhancedSubmit)}
          className="flex flex-col"
        >
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
          <Tags tags={tags} addTag={addTag} removeTag={removeTag} />
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
                        'Recept musí mít nějaký postup a mít mezi 5 a 400 znaky'
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
                      <RemoveSVG />
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

          <div className="mt-6 flex flex-col">
            <h2 className="text-2xl mb-2">Poznámky k receptu:</h2>

            <textarea
              className="rounded-md w-full h-24 p-2 focus:outline-none focus:ring-2 focus:ring-primary mb-2 font-light"
              name="notes"
              id="notes"
              ref={register}
              placeholder="dojmy po uvaření, co přidat, co naopak ubrat, na co si dát pozor atd..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-center mt-4 ml-8 w-40 border border-primary rounded py-1 px-2 hover:bg-primary hover:text-white self-center cursor-pointer"
          >
            Ulož recept
          </button>
        </form>
      )}
    </div>
  );
};

export default RecipeForm;
