import React from 'react';
import '../List/List.scss';
import { useState } from 'react';
import useFetch from '../useFetch';
import RecipeCard from '../RecipeCard';


  const OthersRecipes = () => {
  const {data: Othersrecipes } = useFetch('http://localhost:8000/OthersRecipes');
  const [howCook, setHowCook] = useState(null);
  const [author, setAuthor] = useState(null);


  
  return (
    <div className='d-flex flex-lg-wrap justify-content-center align-items-center gap-5'>
        {Othersrecipes.map((item, index) => (
      <RecipeCard
      key={item.id}
      type="OthersRecipes"
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
}
 
export default OthersRecipes;
  







  
