import './RecipeDetails.sass'
import { useEffect, useState } from 'react'
import { retrieveRecipe, saveNote, retrieveNote } from '../logic'
import { useParams } from 'react-router-dom'
import { Button } from "../components"

function RecipeDetails() {
    const [recipe, setRecipe] = useState({})
    const [note, setNote] = useState({})
    const { recipeId } = useParams()
    
    
    
    useEffect(() => {
        if (note) {
            try {
                retrieveRecipe(sessionStorage.token, recipeId)
                .then((recipe) => {
                    setRecipe(recipe)
                }).then(retrieveNote(sessionStorage.token, recipeId)
                    .then((note) => setNote(note)))
            } catch(error){
                alert(error.message)
            }
        }
        else { 
            try {
            retrieveRecipe(sessionStorage.token, recipeId).then((recipe) =>
            setRecipe(recipe))
            } catch(error){
            alert(error.message)
            }
        }
    }, [recipeId])
    
    const handleSubmit = event => {
        event.preventDefault()
     
        
        const text = event.target.text.value


        try {
            saveNote(sessionStorage.token, recipeId, text)
            .then(() => {
                alert("note create")
            })
            .catch(error => alert(error.message))
        } catch(error){
           alert(error.message)
        }



    }

    return <>
        {!!recipe && <div className="recipe-detail">
            <h1>{recipe.title}</h1>
            <h3>{recipe.description}</h3>
            <h3>{recipe.distilled}</h3>
            <img className='recipe-detail__img' alt="coctel" src={recipe.image}/> 
            <h3>{recipe.note}</h3>

            <form className="recipe-detail__form" onSubmit={handleSubmit}>
                <textarea className="recipe-detail__textarea" name="text" placeholder="note" defaultValue={note && note.text}></textarea>
                <Button type="submit">Save</Button>
            </form>
        </div>}
        
    </>

}
export default RecipeDetails

