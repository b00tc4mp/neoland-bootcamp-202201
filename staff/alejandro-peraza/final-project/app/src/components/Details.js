import './Details.sass'
import { useState, useEffect } from 'react'
// import { retrieveUser, retrieveRecipe } from '../logic'
import { useParams } from 'react-router-dom'

function Details({recipeId}) {
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        try {
            retrieveRecipes(sessionStorage.token, recipeId)
                .then(location => {
                    setLocation(location)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert (error.message)
        }
    }, [])

     return <div className='detail'>
         <h1>{recipe.title}</h1>
        <li>{recipe.description}</li>
        <img src={aaa}/>
        <li>{recipe.type}</li>
        <li>{recipe.destilled}</li>
        
    </div>
}

export default Details