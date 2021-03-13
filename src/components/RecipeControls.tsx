import React from 'react';
// import { Link } from 'react-router-dom';

const RecipeControls: React.FC = () => {
  return (
    <div className="bg-secondary fixed top-0 right-0  flex rounded-bl-xl">
      <a
        href="#"
        className="text-white grid place-items-center hover:bg-primary rounded-bl-xl px-6 py-1 border-r border-tertiary"
      >
        +
      </a>
      <a
        href="#"
        className="text-white grid place-items-center hover:bg-primary px-6 py-1 border-r border-tertiary"
      >
        E
      </a>
      <a
        href="#"
        className="text-white grid place-items-center hover:bg-primary px-6 py-1"
      >
        -
      </a>
    </div>
  );
};

export default RecipeControls;
