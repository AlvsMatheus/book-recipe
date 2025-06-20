import './AboutUs.scss'
import { Link } from "react-router-dom";

const AboutUs = () => {
    return ( 
        <main className="about-us-main d-flex justify-content-between flex-column">
            <article className='about-back d-flex w-100 justify-content-end'>
                <section className="d-flex justify-content-end">
                    <Link to={'/'}>back to homepage</Link>
                </section>
            </article>
            <article className='about-container d-flex w-100 flex-column justify-content-center align-items-center'>
                <section className='about-us-title position-absolute'>
                    <h1>About us</h1>
                    <section className='d-flex w-100 justify-content-center'>
                        <div className='h1-line'/>
                    </section>
                </section>
                <section className='about-child justify-content-lg-between d-flex'>
                    <section className='about-image-container d-flex'>
                        <div className='about-image'></div>
                    </section>
                    <section className='d-flex about-paragraph w-50'>
                        <section className='d-flex flex-column w-100 h-100 justify-content-end'>
                            <section className='d-flex w-100 flex-column justify-content-center'>
                                    <p>
                                    At RecipeBook, we are a team of food lovers brought together by a shared passion for cooking, culture, and connection. We believe that food is more than just a necessity — it’s a language that unites people across different backgrounds and experiences. Our goal is to create a space where everyone, from seasoned chefs to first-time cooks, can share their favorite recipes and culinary traditions. 
                                    </p>
                                    <p>
                                    This platform was built with the idea that every dish has a story. Whether it's your grandmother’s secret sauce or a fusion recipe you invented last week, we want you to have a place to celebrate and share it. Join us in building a diverse and inspiring collection of recipes that reflect the unique flavors of every kitchen around the world.    
                                    </p>
                                    <div className="line-cream d-flex justify-content-start"/>
                            </section>
                            <div className='d-flex w-100 justify-content-end'>
                                <div className='decoration-square'/>
                            </div>
                        </section>
                    </section>
                </section>
            </article>
        </main>
     )
}
 
export default AboutUs;