/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useFieldArray } from 'react-hook-form';

import Ingredient from './Ingredient';

type UseFieldArrayOptions = {
  control?: any;
  register?: any;
  errors?: any;
  defaultValues?: any;
};

const IngredientGroup: React.FC<UseFieldArrayOptions> = ({
  control,
  register,
  errors,
  defaultValues,
}) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: 'allIngredients',
  });

  return (
    <>
      {fields.map((ingGroup, index) => {
        return (
          <div
            className="flex flex-col  mb-4"
            key={ingGroup.id}
            id="ingredient-group"
          >
            <div className="flex mb-4">
              <button className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 18H20M4 6H20H4ZM4 12H20H4Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <input
                className="rounded-md flex-1 h-7 px-2 focus:outline-none focus:ring-2 focus:ring-primary font-light"
                name={`allIngredients[${index}].name`}
                type="text"
                defaultValue={ingGroup.name}
                ref={register()}
                placeholder="Skupina ingrediencí ( např. korpus, omáčka, náplň atd... )"
              />
              <button
                type="button"
                className="ml-2"
                onClick={() => remove(index)}
              >
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

            <Ingredient nestIndex={index} {...{ control, errors, register }} />
          </div>
        );
      })}
      <button
        type="button"
        onClick={() => append(defaultValues.allIngredients[0])}
        className="text-center mt-4 ml-8 w-52 border border-primary rounded py-1 px-2 hover:bg-primary hover:text-white self-end mr-8"
      >
        Přidat skupinu Ingrediencí
      </button>
    </>
  );
};

export default IngredientGroup;
