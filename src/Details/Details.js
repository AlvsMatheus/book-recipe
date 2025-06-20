
import useFetch from "../useFetch";
import './Details.scss';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
 
const Details = () => {
    const {id, type} = useParams();
    const {data:recipe, isPending, error} = useFetch(`http://localhost:8000/${type}/` + id);

    const handleSaveRecipe = async () => {
        const recipeToSave = recipe;

        if (!recipeToSave) {
            console.error("Recipe Not Found")
            return;
        }

        try {
            const res = await fetch(`http://localhost:8000/savedRecipes`);
            const savedRecipes = await res.json();
            const alreadySaved = savedRecipes.some(
                recipe => recipe.id.toString() === id
            );

        if (alreadySaved) {
            console.log("That recipe is already saved!!!");
            return;
        }
        
        const posRes = await  fetch(`http://localhost:8000/savedRecipes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recipeToSave),
        });

        const data = await posRes.json();
        console.log("salvo com sucesso", data);

        } catch (err) {
            console.error("Can't save that recipe", err);
        }
    };

    return ( 

        <div>
            { recipe && (
               <article className="header-two-container">
                   <header className="header-two d-flex flex-column justify-content-center align-items-center">
                    <nav className="d-flex align-items-center justify-content-end ">
                        <Link to={'/'}> Back to homepage</Link>
                    </nav>
                    <section className="header-two-title d-flex flex-column justify-content-center align-items-center">
                        <h1>
                            Preparation Method
                        </h1>
                        <div className="line"/>
                    </section>
                   </header>
                   <main className="tutorial-main d-flex flex-column justify-content-between align-items-center">
                    <article className="d-flex flex-column justify-content-center align-items-center">
                        <section className="section-howcook d-flex justify-content-center align-items-center">
                            <h1>
                                How Cook it?
                            </h1>
                        </section>
                        <article className="page-tutorial d-flex flex-column justify-content-evenly align-items-center">
                            <section className="tutorial-recipe-name d-flex flex-column justify-content-center align-items-center">
                                
                                <section className="tutorial-h2-container d-flex flex-column justify-content-center align-items-center gap-3">
                                    <h2>
                                        {recipe.title}
                                    </h2>
                                    <div className="line-two"/>
                                </section>
                                <aside className="d-flex justify-content-center align-items-center">
                                    by {recipe.author} 
                                </aside>
                            </section>
                            <section className="tutorial-paragraph d-flex flex-column justify-content-center align-items-center">
                                <p>
                                    {recipe.tutorial}

                                </p>
                                <div className="saved-recipe d-flex justify-content-start">
                                    <span className="saves">
                                        <strong>{recipe.saves}</strong> persons saved this recipe
                                    </span>
                                </div>
 
                            </section>
                            <section className="saved-recipe d-flex justify-content-center">
                                <button onClick={handleSaveRecipe}>
                                    Save Recipe!
                                </button>
                            </section>

                        </article>
                    </article>
                   </main>

               </article>
            )}
        </div>
      
        
    
    )
    }
 
export default Details;