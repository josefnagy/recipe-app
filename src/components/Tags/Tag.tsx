import React from 'react';

interface TagProps {
  name: string;
  removeTag: (tag: string) => void;
}

const Tag: React.FC<TagProps> = ({ name, removeTag }) => {
  const handleRemoveTag = () => {
    removeTag(name);
  };

  return (
    <div className="flex mr-1 border border-primary rounded-md h-7 px-2">
      <p className="my-auto">{name}</p>

      <div
        className="ml-1 my-auto hover:bg-primary cursor-pointer"
        onClick={handleRemoveTag}
      >
        <svg className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Tag;
