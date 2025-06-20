import React from 'react';
import './Home.scss';
import List from '../List/List';
import OthersRecipes from '../OthersRecipes/OthersRecipes';
import useFetch from '../useFetch';
import Error from '../error'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

{/* 
  Make the About us  - Do tomorrow
  Make details of "Others Recipe" - Do tomorrow
  (Addictional: Make a "share recipe" in
  the My Recipes into My account and it takes to Others Recipe) - Do tomorrow

  Delivery: one day

  */}

export default function Home() {

const { isPending, error } = useFetch('http://localhost:8000/topRecipes')

  return (
    <main className='main'>
      <article className='top-container d-flex flex-column justify-content-center align-items-center '>
          <div className='top d-flex justify-content-center align-items-center'>
            <h1>TOP RECIPES.</h1>
          </div>
            
            {
            isPending ? (
            <section className='top-wrap d-flex justify-content-center '>
            <section className='loading-container d-flex justify-content-center align-items-center'>
                <div className='loading'></div>
                </section> 
                </section>): error ? (
                  <motion.div
                  className='d-flex justify-content-center align-items-center'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}>
                  <Error/> 
                </motion.div>
                ) : (
               
                  <section className='top-wrap d-flex justify-content-center '> 
                  <section className='recipes-container d-flex flex-row flex-lg-wrap flex-xl-wrap justify-content-center p-lg-5 p-md-5 gap-5'>
                    <List/>
                   </section>  
                  </section>
             )
              }
        </article>

        

        <article className='others-container d-flex flex-column'>
        <section className='others-title d-flex justify-content-center align-items-center'>
          <h1>OTHERS RECIPES.</h1>
        </section>
        <article className='top-container container-two d-flex flex-column justify-content-center align-items-center '>
         { isPending ? (
         <section className='top-wrap d-flex justify-content-center mt-5 p-5'>
         <section className='loading-container d-flex justify-content-center align-items-center'>
             <div className='loading'></div>
             </section> 
             </section>)
             : error? (
              <motion.div
                	className='d-flex justify-content-center align-items-center'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}>
              <article className='error-others d-flex justify-content-center align-items-center'>
                <Error/>
                </article>
              </motion.div>) : (
             <section className='top-wrap wrap-two d-flex justify-content-center '> <section className='recipes-container recipes-two d-flex flex-row flex-lg-wrap flex-xl-wrap justify-content-center p-lg-5 p-md-5 gap-5'>
                  <OthersRecipes/>
            </section>
          </section>
          )
          }

        </article>
        </article>


        
        <article className='ownfood-container d-flex flex-column justify-content-center align-items-center'>
        <section className='ownfood-text-container d-flex justify-content-center align-items-center'>
          <h1 className='ownfood-text'>Do you're Interesting to make and share your own recipe?
          </h1>
        </section>
              <section className='create-link-container d-flex justify-content-center align-items-center'>
                <Link to={'/Create'} className='create-link'>
                  Create My Recipe
                </Link>
                </section>
        </article>

    </main>
  )
}
