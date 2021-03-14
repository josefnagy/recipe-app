import React from 'react';

const AppInfo: React.FC = () => {
  const renderAppInfo = () => {
    return (
      <>
        <h2 className="text-7xl font-heading">App INFO</h2>
        <p className="font-light mt-4 w-2/3">
          Hello my friend from the INTERNET, Welcome to best app for recipes. I
          am glad you want to join me on cooking journey. Just pick one recipe
          on the left and start creating some awesome stuff.
        </p>
      </>
    );
  };

  return (
    <div className="flex-auto bg-tertiary p-20 flex flex-col ml-84">
      {renderAppInfo()}
    </div>
  );
};

export default AppInfo;
