/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useFieldArray } from 'react-hook-form';

type UseFieldArrayOptions = {
  control?: any;
  register?: any;
  nestIndex: number;
};

const Ingredient: React.FC<UseFieldArrayOptions> = ({
  nestIndex,
  control,
  register,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `allIngredients[${nestIndex}].ingredients`,
  });
  return (
    <>
      {fields.map((ingredient, k) => {
        return (
          <div className="flex" key={ingredient.id}>
            <div className="grid w-6 h-6 place-items-center bg-primary rounded-full text-white mr-2">
              {`${k + 1}.`}
            </div>
            <input
              className="rounded-md flex-1 h-7 px-2 focus:outline-none focus:ring-2 focus:ring-primary font-light mr-2"
              name={`allIngredients[${nestIndex}].ingredients[${k}].name`}
              type="text"
              ref={register()}
              defaultValue={ingredient.name}
              placeholder="Název ingredience"
            />
            <input
              className="rounded-md h-7 px-2 focus:outline-none focus:ring-2 focus:ring-primary font-light mr-2"
              name={`allIngredients[${nestIndex}].ingredients[${k}].amount`}
              type="text"
              ref={register()}
              defaultValue={ingredient.amount}
              placeholder="Množství"
            />
            <select
              name={`allIngredients[${nestIndex}].ingredients[${k}].unit`}
              ref={register()}
              defaultValue={ingredient.unit}
              className="rounded-md h-7 px-2 focus:outline-none focus:ring-2 focus:ring-primary font-light mr-2"
            >
              <option value="g">g</option>
              <option value="kg">kg</option>
              <option value="ml">ml</option>
            </select>
            <input
              className="rounded-md h-7 px-2 focus:outline-none focus:ring-2 focus:ring-primary font-light mr-2"
              name={`allIngredients[${nestIndex}].ingredients[${k}].note`}
              type="text"
              ref={register()}
              defaultValue={ingredient.note}
              placeholder="Poznámka"
            />
            <button type="button" onClick={() => remove(k)}>
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
        );
      })}
      <button
        type="button"
        className="text-center mt-4 ml-8 w-40 border border-primary rounded py-1 px-2 hover:bg-primary hover:text-white"
        onClick={() =>
          append({
            name: '',
            amount: null,
            note: '',
            unit: '',
          })
        }
      >
        Přidat Ingredienci
      </button>
    </>
  );
};

export default Ingredient;
