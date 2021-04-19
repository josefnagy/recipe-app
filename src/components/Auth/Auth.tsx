import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Modal } from '../Modal';
import { auth } from '../../api/firebase';
import { setUser, logout } from '../../store/auth/actions';
import { useAppSelector } from '../../hooks';
import { AvatarSVG } from '../../svg';

const Auth: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      user && dispatch(setUser(user));
    });
    return unsubscribe;
  }, []);

  const handleLogout = () => {
    setOpen(!open);
    dispatch(logout());
  };

  const renderActions = () => {
    if (user)
      return (
        <div className="flex flex-col w-full">
          <button
            className="hover:bg-secondary hover:text-tertiary  px-8 py-2 cursor-pointer"
            onClick={() => handleLogout()}
          >
            Odhlásit se
          </button>
        </div>
      );
    return (
      <div className="flex flex-col">
        <Link
          to="/auth/login"
          className="hover:bg-secondary hover:text-tertiary px-8 py-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          Přihlásit se
        </Link>
        <Link
          to="/auth/signup"
          className="hover:bg-secondary hover:text-tertiary px-8 py-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          Vytvořit účet
        </Link>
      </div>
    );
  };

  return (
    <>
      <div
        className="self-end hover:bg-secondary cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <AvatarSVG />
      </div>
      {open && (
        <Modal
          title={user ? 'Welcome BRO' : 'hello'}
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
