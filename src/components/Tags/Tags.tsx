import React, { FormEvent, KeyboardEvent, useState, useEffect } from 'react';

import { useAppSelector } from '../../hooks';
import Tag from './Tag';

interface TagsProps {
  tags: string[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
}

const FilteredTags: (string | undefined)[] = [];

const Tags: React.FC<TagsProps> = ({ tags, addTag, removeTag }) => {
  const [tag, setTag] = useState('');
  const [filteredTags, setFilteredTags] = useState(FilteredTags);
  const allTags = useAppSelector((state) => {
    const allRecipes = Object.values(state.recipes.allRecipes);
    const allRecipesWithTags = allRecipes.filter(
      (recipe) => typeof recipe.tags !== 'undefined',
    );
    return allRecipesWithTags.map((recipe) => recipe.tags).flat();
  });

  useEffect(() => {
    const fT: (string | undefined)[] = allTags.filter((element) =>
      element?.toLocaleLowerCase().includes(tag.toLocaleLowerCase()),
    );
    setFilteredTags(fT);
  }, [tag]);

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

  const handleTagClick = (tag: string | undefined) => {
    if (tag) {
      addTag(tag);
      setTag('');
    }
  };

  return (
    <div className="mb-3 flex h-7">
      <ul className="flex">
        {tags.map((tag, index) => (
          <li key={index}>
            <Tag name={tag} removeTag={removeTag} />
          </li>
        ))}
      </ul>
      <div className="flex-1 h-7 relative">
        <input
          className="rounded-md w-full h-7 px-2 focus:outline-none focus:ring-2 focus:ring-primary font-light"
          name="tags"
          type="text"
          value={tag}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setTag(e.currentTarget.value)
          }
          onKeyDown={handleTagSubmit}
          placeholder="Přidej tag"
        />
        {allTags.length > filteredTags.length && filteredTags.length > 0 && (
          <div className="bg-secondary text-white font-light mt-1 rounded-md p-2">
            <ul className="flex">
              {filteredTags.map((tag, index) => (
                <li
                  key={index}
                  className="mr-2 rounded px-2 border border-primary hover:bg-primary cursor-pointer"
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tags;
