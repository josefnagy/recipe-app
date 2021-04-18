import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface SignupInfo {
  userName: string;
  password: string;
  passwordAgain: string;
}

interface SignupFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValues: any;
  onSubmit: (signupInfo: SignupInfo) => void;
}

const Signup: React.FC<SignupFormProps> = () => {
  const { register, handleSubmit, getValues, errors } = useForm();

  const onSubmit = (signupInfo: SignupInfo) => console.log(signupInfo);

  return (
    <div className="flex-auto bg-tertiary p-20 flex flex-col ml-84">
      <>
        <div className="grid place-items-center h-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative flex flex-col w-1/2 p-10 border border-primary rounded-md"
          >
            <h3 className="absolute text-xl -top-4 left-10 bg-tertiary text-primary font-heading">
              Vytvořit účet
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
            {errors.username && (
              <p className="font-light text-red-700 text-xs flex items-center">
                <svg
                  className="h-4 w-4 ml-4 mr-2 mt-1 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="red"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                {errors.username.message}
              </p>
            )}
            <input
              type="password"
              name="password"
              placeholder="Heslo"
              className="rounded-md my-1 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary font-light shadow-sm"
              ref={register({
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
                required:
                  'Heslo musí mít alspoň 8 znaků, jedno malé a velké písmeno, a jednu číslici',
              })}
            />
            {/* TODO: error u toho hesla to nezobrazuje dobre, chce to fixnout */}
            {errors.password && (
              <p className="font-light text-red-700 text-xs flex items-center">
                <svg
                  className="h-5 w-5 ml-4 mr-2 mt-1 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="red"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                q{errors.password.message}
              </p>
            )}
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
            {errors.passwordAgain && (
              <p className="font-light text-red-700 text-xs flex items-center">
                <svg
                  className="h-4 w-4 ml-4 mr-2 mt-1 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="red"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                {errors.passwordAgain.message}
              </p>
            )}
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
