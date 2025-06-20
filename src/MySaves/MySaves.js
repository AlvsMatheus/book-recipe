import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import useDelete from "../useDelete";
import './MySaves.scss';
import '../Details/Details.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Error from '../error';

const MySaves = () => {

    const {data:savedRecipesFromFetch, isPending, error} = useFetch('http://localhost:8000/savedRecipes');
    const [savedRecipes, setSavedRecipes] = useState([]);
    const { handleRemove } = useDelete("savedRecipes", setSavedRecipes);

    useEffect (() => {
        if (savedRecipesFromFetch) {
            setSavedRecipes(savedRecipesFromFetch);
        }
    }, [savedRecipesFromFetch]);


    return ( 
        <main>
            <article className="header-two-container">
            <header className="header-two d-flex flex-column justify-content-center align-items-center">
                    <nav className="d-flex align-items-center justify-content-end pe-5">
                        <Link to={'/'}> Back to homepage</Link>
                    </nav>
                    <section className="header-two-title d-flex flex-column justify-content-center align-items-center">
                        <h1>
                            Saved Recipes
                        </h1>
                        <div className="line"/>
                    </section>
                   </header>
            </article>
            <article className="saved-container d-flex flex-column justify-content-evenly align-items-center">
                <article className="saved-h2 d-flex justify-content-start align-items-center">
                    <section className="d-flex flex-column justify-content-start">
                        <h2>Saved Recipes</h2>
                        <div className="d-flex flex-row gap-1 justify-content-start align-items-center">
                            <div className="line-two"/>
                            <div className="drop-container d-flex justify-content-center align-items-center gap-2">
                                <div className="drop"/>
                                <div className="drop"/>
                                <div className="drop"/>
                            </div>
                        </div>
                    </section>
                </article>
                 {isPending && (
                        <section className='top-wrap d-flex justify-content-center w-75 '>
                        <section className='loading-container d-flex justify-content-center align-items-center'>
                            <div className='loading'></div>
                            </section> 
                            </section>
                    )}
                    {error && (
                        <motion.div
                        className='d-flex justify-content-center align-items-center mt-5'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}>
                        <Error/> 
                      </motion.div>
                      )}
                
                
                {!isPending && !error &&

                (<article className="saved-list-container">
                 {savedRecipes.map((item) => (
                <div key={item.id}>
                    <Link
                    to={`/details/${item.id}`}>
                        <article>
                            <article
                            style={{backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover', backgroundPosition: 'center'}}
                            className="saved-list d-flex flex-column justify-content-between align-items-center">
                                    <div className="list-recipe-container d-flex">
                                        <p className="saved-list-recipe">{item.title}</p>
                                    </div>
                                    <div className="d-flex w-100 justify-content-end pe-2">
                                        <p className="saved-list-author">By {item.author}</p>
                                    </div>
                            </article>
                        </article>
                    </Link>
                    <article className="d-flex mt-4 w-100 justify-content-center">
                                <button onClick={ () => handleRemove(item.id)} className="delete">
                                    Remove
                                </button>
                    </article>
                </div>

                ))
            }</article>)}

                
                
            </article>
        </main>
     );
}
 
export default MySaves;