/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useFieldArray } from 'react-hook-form';

type UseFieldArrayOptions = {
  control?: any;
  register?: any;
  errors?: any;
  nestIndex: number;
};

const amountOptions = [
  'jednotka',
  'ks',
  'g',
  'kg',
  'ml',
  'dl',
  'l',
  'balení',
  'balíček',
  'hrnek',
  'hrst',
  'kelímek',
  'kostka',
  'láhev',
  'lžička',
  'lžíce',
  'miska',
  'plátek',
  'plechovka',
  'sklenice',
  'snítka',
  'stroužek',
  'svazek',
  'šálek',
  'špetka',
  'krajíc',
  'stonek',
];

const Ingredient: React.FC<UseFieldArrayOptions> = ({
  nestIndex,
  control,
  errors,
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
          <div className="flex flex-col mb-2" key={ingredient.id}>
            <label
              htmlFor={`allIngredients[${nestIndex}].ingredients[${k}].name`}
              className="text-indigo-900 font-light ml-9"
            >
              {errors.allIngredients &&
              errors.allIngredients[nestIndex] &&
              errors.allIngredients[nestIndex].ingredients
                ? errors.allIngredients[nestIndex].ingredients[k] &&
                  'Chybí údaje o ingredienci'
                : ''}
            </label>
            <div className="flex w-full">
              <div className="grid w-6 h-6 place-items-center bg-primary rounded-full text-white mr-2">
                {`${k + 1}.`}
              </div>
              <input
                className="rounded-md flex-1 h-7 px-2 focus:outline-none focus:ring-2 focus:ring-primary font-light mr-2"
                name={`allIngredients[${nestIndex}].ingredients[${k}].name`}
                type="text"
                ref={register({ required: true, minLength: 3, maxLength: 45 })}
                defaultValue={ingredient.name}
                placeholder="Název ingredience"
              />
              <input
                className="rounded-md h-7 px-2 focus:outline-none focus:ring-2 focus:ring-primary font-light mr-2"
                name={`allIngredients[${nestIndex}].ingredients[${k}].amount`}
                type="number"
                ref={register({ required: true, min: 1, max: 9999 })}
                defaultValue={ingredient.amount}
                placeholder="Množství"
              />
              <select
                name={`allIngredients[${nestIndex}].ingredients[${k}].unit`}
                ref={register()}
                defaultValue={ingredient.unit}
                className="rounded-md h-7 px-2 focus:outline-none focus:ring-2 focus:ring-primary font-light mr-2"
              >
                {amountOptions.map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
                {/* <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="ml">ml</option> */}
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
