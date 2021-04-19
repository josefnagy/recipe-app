import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { WarningSVG } from '../../svg';
import { SignupCreditials } from '../../store/auth/types';
import { useAppSelector } from '../../hooks';

import { signup, cleanError } from '../../store/auth/actions';

const Signup: React.FC = () => {
  const { register, handleSubmit, getValues, errors } = useForm();
  const dispatch = useDispatch();
  const errorMsg = useAppSelector((state) => state.auth.error);

  useEffect(() => {
    dispatch(cleanError());
  }, []);

  const onSubmit = (signupCreditials: SignupCreditials) => {
    dispatch(signup(signupCreditials));
  };

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
              Vytvořit účet
            </h3>
            {errorMsg && (
              <p className="flex justify-center items-center mb-2 font-light bg-red-500">
                {<WarningSVG />} {errorMsg}
              </p>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-md my-1 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary font-light shadow-sm"
              ref={register({
                required: 'Musíš mít nějaký email',
                minLength: {
                  value: 3,
                  message: 'Email musí být alspoň 3 znaky dlouhý',
                },
                maxLength: {
                  value: 25,
                  message: 'Email může mít maximálně 15 znaků',
                },
              })}
            />
            {errors.email && renderError(errors.email.message)}
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
            <input
              type="password"
              name="passwordAgain"
              placeholder="Heslo znovu"
              className="rounded-md my-1 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary font-light shadow-sm"
              ref={register({
                validate: {
                  passwordEqual: (value) =>
                    value === getValues().password || 'Hesla se neshodujou',
                },
              })}
            />
            {errors.passwordAgain && renderError(errors.passwordAgain.message)}

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
                Vytvořit účet
              </button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default Signup;
