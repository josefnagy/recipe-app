import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { WarningSVG } from '../../svg';
import { LoginInfo } from '../../store/auth/types';

const Login: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (loginInfo: LoginInfo) => console.log(loginInfo);

  const renderError = (errorMessage: string) => (
    <p className="font-light text-red-700 text-xs flex items-center mr-4">
      <WarningSVG />
      {errorMessage}
    </p>
  );

  return (
    <div className="flex-auto bg-tertiary p-20 flex flex-col ml-84">
      <>
        <div className="grid place-items-center h-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative flex flex-col w-1/2 max-w-md p-10 border border-primary rounded-md"
          >
            <h3 className="absolute text-xl -top-4 left-8 bg-tertiary text-primary font-heading px-2">
              Přihlásit se
            </h3>
            <input
              type="text"
              name="username"
              placeholder="Uživatelské jméno"
              className="rounded-md my-1 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary font-light shadow-sm"
              ref={register({
                required: 'Musíš mít nějaké uživatelské jméno',
                minLength: {
                  value: 3,
                  message: 'Uživatelské jméno musí být alspoň 3 znaky dlouhé',
                },
                maxLength: {
                  value: 15,
                  message: 'Uživatelské jméno může mít maximálně 15 znaků',
                },
              })}
            />
            {errors.username && renderError(errors.username.message)}
            <input
              type="password"
              name="password"
              placeholder="Heslo"
              className="rounded-md my-1 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary font-light shadow-sm"
              ref={register({
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  message:
                    'Heslo musí mít alspoň 8 znaků, jedno malé a velké písmeno, a jednu číslici.',
                },
                required:
                  'Heslo musí mít alspoň 8 znaků, jedno malé a velké písmeno, a jednu číslici.',
              })}
            />

            {errors.password && renderError(errors.password.message)}

            <div className="mt-4 flex justify-around">
              <Link
                to="/"
                className="border text-center border-red-500 mr-4 rounded-md py-1 px-2 flex-1 hover:bg-red-500 hover:text-white"
              >
                Zpět
              </Link>
              <button
                type="submit"
                className="border border-primary rounded-md py-1 px-2 flex-1 hover:bg-primary hover:text-white"
              >
                Přihlásit se
              </button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default Login;
