import '../CreateRecipe/CreateRecipe.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const CreateRecipe = () => {

    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [tutorial, setTutorial] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = {author, title, image, tutorial};
        setIsPending(true);
        
        fetch('http://localhost:8000/myRecipes', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newRecipe)
        }).then(() => {
            console.log('New recipe added');
            setIsPending(false);
            navigate('/');
        })

    }

    return ( 
        <div className='background-create'>
            <article className="create-container d-flex align-items-center justify-content-center">
                <section className='creating-container d-flex flex-column justify-content-evenly align-items-center'>
                        <section className='create-nav d-flex justify-content-center align-items-center pe-4 ps-4 '>
                        <nav className='d-flex justify-content-between align-items-center pb-3'>
                            <h1 className='creating-text'>My Recipe.</h1>
                            <Link  to="/">
                             <div className='create-back'> Back to Homepage</div>
                            </Link>
                        </nav>
                        </section>
                    <section className='form-create-container d-flex justify-content-center align-items-center flex-column'>
                        <form
                        onSubmit={handleSubmit} 
                        className='d-flex flex-column align-items-start justify-content-center align-items-center gap-5' action="">
                            <section className='d-flex flex-column gap-3'>
                                <label id='iauthor'> Author's Name: </label>
                                <input 
                                id='iauthor'
                                placeholder='Your name'
                                type="text"
                                required
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                /> 
                            </section >
                            <section className='d-flex gap-3 flex-column '>
                                <label id='ititle'>Recipe's Name:</label>
                                <input 
                                id='ititle'
                                placeholder='Recipe name'
                                type="text"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                 /> 
                            </section>
                            <section className='d-flex gap-3 flex-column '>
                                <label id='iimage'>Recipe's Image:</label>
                                <input 
                                id='iimage'
                                type="url" 
                                required
                                placeholder='https://example.com/image.jpg'
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                />
                                
                                 
                            </section>
                            <section className='d-flex flex-column justify-content-center align-items-start '>
                                <label id='itutorial' >How cook it? </label>
                                <textarea
                                id='itutorial'
                                required
                                rows="10"
                                cols="30"
                                placeholder='Write your recipe here...'
                                value={tutorial}
                                onChange={(e) => setTutorial(e.target.value)}
                                className='write-recipe'>
                                </textarea>
                            </section>
                            {!isPending && <button className='button-create'>Create Recipe</button>}
                            {isPending && <button  className='button-create creating'>Creating Recipe...</button>}
                            
                        </form>
                    </section>
                </section>
            </article>
        </div>
     );
}
 
export default CreateRecipe;