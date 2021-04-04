import React from 'react';
import { Link } from 'react-router-dom';

const Aside: React.FC = () => {
  return (
    <div className="w-20 bg-primary flex-none fixed h-screen flex items-center justify-center">
      <Link to="/" className="w-full hover:bg-secondary">
        <svg viewBox="0 0 20 20" fill="#E5E5E5" className="w-10 mx-auto my-2">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </Link>
    </div>
  );
};

export default Aside;
