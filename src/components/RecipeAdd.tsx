import React from 'react';
import { useForm } from 'react-hook-form';

import { Recipe } from '../store/recipes/types';

const RecipeAdd: React.FC = () => {
  const { register, handleSubmit, watch } = useForm<Recipe>();

  const onSubmit = (data: Recipe) => console.log(data);

  // console.log(watch('name'));

  return (
    <div className="flex-auto bg-tertiary p-20 flex flex-col ml-84">
      <h1>Přidej nový recept</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input name="name" ref={register} type="text" />
          <input
            name="cookingTime"
            ref={register}
            type="text"
            placeholder="Čas přípravy"
          />
          <select name="difficulty" ref={register}>
            <option value="easy">Lehká</option>
            <option value="moderate">Střední</option>
            <option value="hard">Těžká</option>
          </select>
          <input
            name="portions"
            ref={register}
            type="text"
            placeholder="Počet porcí"
          />
        </div>

        <textarea name="description" id="description" ref={register}></textarea>
        <input
          name="portions"
          ref={register}
          type="text"
          placeholder="Počet porcí"
        />
        <input
          name="url"
          type="text"
          ref={register}
          placeholder="URL receptu kde si ho ukrad"
        />

        {/* ------ INGREDIENTS------ */}
        <div>
          <h2>Ingredience:</h2>
          {/* ------ INGREDIENT GROUP ------ */}
          <div>
            {/* ------ INGREDIENT GROUP HEADER ------ */}
            <div>
              <button>
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
                name="ingGroupName"
                type="text"
                ref={register}
                placeholder="Skupina ingrediencí ( např. korpus, omáčka, náplň atd... )"
              />
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
            {/* INGREDIENTS LIST */}
            <div>
              {/* INGREDIENT */}
              <div>
                <div>1.</div>
                <input
                  name="ingredientName"
                  type="text"
                  ref={register}
                  placeholder=""
                />
                <input
                  name="amount"
                  type="text"
                  ref={register}
                  placeholder="Množství"
                />
                <select name="unit" ref={register}>
                  <option value="g">g</option>
                  <option value="kg">kg</option>
                  <option value="ml">ml</option>
                </select>
                <input
                  name="note"
                  type="text"
                  ref={register}
                  placeholder="Poznámka"
                />
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
            </div>
            <button>Přidat Ingredienci</button>
          </div>
          <button>Přidat skupinu Ingrediencí</button>
        </div>

        {/* BATTLE PLAN */}
        <div>
          {/* BATTLE PLAN STEP */}
          <div>
            <div>1.</div>
            <textarea
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
          <button>Přidat krok postupu</button>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default RecipeAdd;
