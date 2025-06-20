import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const RecipeCard = ({ item, index, howCook, setHowCook, author, setAuthor, type }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      <Link to={`/details/${type}/${item.id}`} className='link'>
        <article
          className='recipe-list d-flex flex-column'
          onMouseEnter={() => { setHowCook(item.id); setAuthor(item.id); }}
          onMouseLeave={() => { setHowCook(null); setAuthor(null); }}
        >
          <button className='button-details'>
            <section
              className='recipe-image d-flex justify-content-center align-items-center flex-column'
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className='how-cook-container d-flex flex-column align-items-center'>
                <p className='how-cook'>{howCook === item.id ? "how cook it?" : item.title}</p>
                <p className='author'>{author === item.id ? "" : `By  ${item.author}`}</p>
              </div>
            </section>
          </button>
        </article>
      </Link>
    </motion.div>
  );
};

export default RecipeCard;
