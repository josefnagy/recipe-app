import React, { FormEvent, KeyboardEvent, useState } from 'react';

import { useAppSelector } from '../../hooks';
import Tag from './Tag';

interface TagsProps {
  tags: string[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
}

const Tags: React.FC<TagsProps> = ({ tags, addTag, removeTag }) => {
  const [tag, setTag] = useState('');
  // const allTags =

  const handleTagSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      if (tags.includes(tag)) {
        console.log('error animation');
      } else {
        addTag(tag);
        setTag('');
      }
    }
  };

  return (
    <div className="mb-3 flex  h-7">
      <ul className="flex">
        {tags.map((tag, index) => (
          <li key={index}>
            <Tag name={tag} removeTag={removeTag} />
          </li>
        ))}
      </ul>
      <input
        className="rounded-md flex-1 h-7 px-2 focus:outline-none focus:ring-2 focus:ring-primary font-light"
        name="tags"
        type="text"
        value={tag}
        onChange={(e: FormEvent<HTMLInputElement>) =>
          setTag(e.currentTarget.value)
        }
        onKeyDown={handleTagSubmit}
        placeholder="Přidej tag"
      />
    </div>
  );
};

export default Tags;
