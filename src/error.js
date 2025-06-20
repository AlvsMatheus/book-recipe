import './error.scss'
import useFetch from './useFetch';

const Error = () => {

    const { error } = useFetch('http://localhost:8000/topRecipes')


    return ( 
        <section className='top-wrap d-flex justify-content-center'>
        <article className="error-container d-flex justify-content-center align-items-center flex-column  w-100">
            <section className="error-element d-flex h-50 w-100 flex-column  justify-content-center align-items-center">
                <section className='d-flex justify-content-center align-items-center'>
                    <p className='oops'>Oops, something went wrong! Please try again later...</p>
                    <div className='error-cat'></div>
                </section>
                <section className='error-type d-flex w-100 justify-content-start align-items-center'>
                <p>type error: {error} </p>
            </section>
            </section>
        </article>
        </section>
     );
}
 
export default Error;