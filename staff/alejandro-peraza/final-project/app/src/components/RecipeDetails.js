 import './RecipeDetails.sass'
 import { useEffect, useState } from 'react'
 import { findRecipesByDistilled, findRecipesByType, findRecipesByTitle } from '../logic'


// function findRecipesByDistilled ({recipeId}) {

//     const [recipe, setRecipe] = useState()

//     useEffect(() => {
//         try {
//             retrieveRecipe(sessionStorage.token, recipeId)
//             .then(recipe => {
//                 setRecipe(recipe)
//             })
//             .catch(error => alert(error.message))
//         } catch (error) {
//             alert(error.message)
//         }
//     }, [])

//     function findRecipesByTitle ({recipeId}) {

//         const [recipe, setRecipe] = useState()
    
//         useEffect(() => {
//             try {
//                 retrieveRecipe(sessionStorage.token, recipeId)
//                 .then(recipe => {
//                     setRecipe(recipe)
//                 })
//                 .catch(error => alert(error.message))
//             } catch (error) {
//                 alert(error.message)
//             }
//         }, [])

//         function findRecipesByType ({recipeId}) {

//             const [recipe, setRecipe] = useState()
        
//             useEffect(() => {
//                 try {
//                     retrieveRecipe(sessionStorage.token, recipeId)
//                     .then(recipe => {
//                         setRecipe(recipe)
//                     })
//                     .catch(error => alert(error.message))
//                 } catch (error) {
//                     alert(error.message)
//                 }
//             }, [])


//     return <>
//         {recipe && <ul>
//             <li>{recipe.title}</li>
//             <li>{recipe.description}</li>
//             <li>{recipe.image}</li>
//             <li>{recipe.type}</li>
//             <li>{recipe.distilled}</li>
//         </ul>}
//     </>
// }

 export default findRecipesByDistilled