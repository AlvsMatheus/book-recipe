import useFetch from '../useFetch';
import './MyAccount.scss';
import {Link} from 'react-router-dom';
import useDelete from '../useDelete';
import {useEffect, useState} from 'react';

const MyAccount = () => {

    const {data: fetchedRecipes, isPending} = useFetch('http://localhost:8000/myRecipes');
    const [myRecipes, setMyRecipe] = useState([]);
    const {handleRemove} = useDelete("myRecipes", setMyRecipe);

    useEffect(() => {
        if (fetchedRecipes) {
            setMyRecipe(fetchedRecipes);
        }
    }, [fetchedRecipes]);

    
    return ( 
            <main className="main-my-account d-flex flex-column account-container align-items-center">
                <nav className="d-flex align-items-center justify-content-end pt-5 ">
                        <Link to={'/'}> Back to homepage</Link>
                    </nav>
                <section className='d-flex flex-column justify-content-evenly flex-lg-row w-100 p-4 gap-5'>
                    <article className="d-flex profile-container w-25 justify-content-center align-items-center flex-column p-2">
                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                <div className='image'>
                                </div>
                                <section className='my-name d-flex flex-column justify-content-center align-items-center mb-3'>
                                <h2>Marina Santos</h2>
                                <div className='line'/>
                                </section>
                            </div>
                            <div className='d-flex flex-column w-100 justify-content-center align-items-center'>
                                    <span><strong>Level:</strong> Master cook</span>
                                    <span><strong>Likes:</strong> 10083</span>
                                    <span><strong>Recipes created:</strong> 142</span>
                                    <span><strong>Recipes saved:</strong> 209</span>
                            </div>
                            <article className='below-profile d-flex justify-content-start align-items-center w-100'>
                                <article className='profile-link d-flex flex-column'>
                                    <Link onClick={(e) => e.preventDefault()} to={'#'}><span>My Account</span></Link>
                                    <Link onClick={(e) => e.preventDefault()} to={'#'}><span>Preferencies</span></Link>
                                    <Link onClick={(e) => e.preventDefault()} to={'#'}><span>Customize Theme</span></Link>
                                    <Link onClick={(e) => e.preventDefault()} to={'#'}><span>Activate 2FA</span></Link>
                                    <Link onClick={(e) => e.preventDefault()} to={'#'}><span>Logout</span></Link>
                                </article>
                            </article>
                    </article>
                         <section className='about-me d-flex flex-column gap-5 align-items-center'>
                        <div className='d-flex flex-column align-items-center justify-content-center'>
                            <div className='hat'></div>
                            <h1>About Me</h1>
                            <div className='line'/>
                        </div>

                        <div className='about-me-text'>
                            <p>Cozinho desde pequena, mas foi em 2022 que comecei a registrar tudo! Espero que minhas receitas te inspirem, vou compartilhar tudo que sei🍝❤️</p>
                        </div>
                        <section className='d-flex w-100 justify-content-center'>
                            <ul>
                                <li>
                                    <span>
                                        Since 2023
                                    </span>
                                    </li>
                                <li>
                                    <span>
                                        Shared 59 recipes
                                    </span>
                                    </li>
                                <li>
                                    <span>
                                        Get the "master cook" in the lasth month
                                    </span>
                                    </li>
                            </ul>
                        </section>
                    </section>
                   
                </section>
                   
                
                <article className='d-flex w-100 justify-content-center align-items-center flex-column '>
                    <article className='myrecipes d-flex justify-content-start flex-column '>
                        <p className='myrecipes-title'>My Recipes</p>
                    
                <article className='my-list-container d-flex'>
                    {
                myRecipes.map((item) => (
                        <article key={item.id}>
                            <article
                            style={{backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover', backgroundPosition: 'center'}}
                            className="my-list d-flex flex-column justify-content-between align-items-center">
                                    <div className="list-recipe-container d-flex">
                                        <p className="my-list-recipe">{item.title}</p>
                                    </div>
                                    <div className="d-flex w-100 justify-content-end pe-2">
                                        <p className="my-list-author">By {item.author}</p>
                                    </div>
                            </article>
                            <div className='d-flex w-100 justify-content-center mt-4'>
                                <button onClick={ () => handleRemove(item.id)} className="delete">
                                        Remove
                                </button>
                            </div>
                        </article>
                ))
                }
                </article>
                    </article>
                </article>
            </main>
     );
    }
export default MyAccount;