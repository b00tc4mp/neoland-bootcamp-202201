import './RecipeDetails.sass'
import { useEffect, useState } from 'react'
import { retrieveRecipe, saveNote, retrieveNote } from '../logic'
import { useParams } from 'react-router-dom'
import { Button } from "../components"

function RecipeDetails() {
    const [recipe, setRecipe] = useState({})
    const [note, setNote] = useState({})
    const { recipeId } = useParams()
    
    
    /*  useEffect(() => {
        try {
            Promise.all([retrieveRecipe(sessionStorage.token, recipeId), retrieveNote(sessionStorage.token, recipeId)])
            .then(([recipe, note]) => {
                setRecipe(recipe)
                setNote(note)
            })
            .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
        
    }, [recipeId]) */
    
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
    
    // const goBack = event => {
        //     event.preventDefault()
        
    //     onBack()
    // }

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
        {!!recipe && <div>
            <h1>{recipe.title}</h1>
            <h3>{recipe.description}</h3>
            <h3>{recipe.distilled}</h3>
            <img className='img' alt="coctel" src={recipe.image}/> {/* Pasar a BEM */}
            <h3>{recipe.note}</h3>

            <form onSubmit={handleSubmit}>
                <textarea name="text" placeholder="note" defaultValue={note && note.text}></textarea>
                <Button type="submit">Save</Button>
            </form>
        </div>}
         {/* <a href="" onClick={goBack}>back</a>   */}
    </>

}
export default RecipeDetails

