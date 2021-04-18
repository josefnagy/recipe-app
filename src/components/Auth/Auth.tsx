import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Modal } from '../Modal';

const Auth: React.FC = () => {
  const [open, setOpen] = useState(false);

  const renderActions = () => (
    <div className="flex flex-col">
      <Link
        to="/auth/signup"
        className="hover:bg-secondary hover:text-tertiary px-8 py-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        Vytvořit účet
      </Link>

      <Link
        to="/auth/login"
        className="hover:bg-secondary hover:text-tertiary px-8 py-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        Přihlásit se
      </Link>
    </div>
  );

  return (
    <>
      <div
        className="self-end hover:bg-secondary cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <svg
          className="h-10 w-10 mx-auto my-3"
          fill="#279037"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      {open && (
        <Modal
          title="Auth"
          open={open}
          content={false}
          actions={renderActions()}
          className="absolute bottom-10 left-10 bg-tertiary border border-secondary"
          onDismiss={() => ''}
        />
      )}
    </>
  );
};

export default Auth;
