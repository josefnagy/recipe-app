import React from 'react';

const Recipe404: React.FC = () => {
  const render404 = () => {
    return (
      <>
        <h2 className="text-5xl font-heading">404 😢</h2>
        <p className="font-light mt-4">Sorry bro, this page doesnt exist...</p>
      </>
    );
  };

  return (
    <div className="flex-auto bg-tertiary p-20 flex flex-col ml-84 justify-center text-center">
      {render404()}
    </div>
  );
};

export default Recipe404;
