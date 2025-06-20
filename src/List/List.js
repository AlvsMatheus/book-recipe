import React from 'react';
import './List.scss';
import { useState } from 'react';
import useFetch from '../useFetch';
import RecipeCard from '../RecipeCard';

  const List = () => {
  const {data: recipe, error } = useFetch("http://localhost:8000/topRecipes");
  const [howCook, setHowCook] = useState(null);
  const [author, setAuthor] = useState(null);



  
  return (
  <div className='d-flex flex-lg-wrap justify-content-center align-items-center gap-5'>
    {recipe.map((item, index) => (
      <RecipeCard
      key={item.id}
      type="topRecipes"
      item={item}
      index={index}
      howCook={howCook}
      setHowCook={setHowCook}
      author={author}
      setAuthor={setAuthor}
      />
    ))}
    </div>
  )
  };
 
export default List;
  
  
