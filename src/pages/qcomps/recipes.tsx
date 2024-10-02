import {Recipe} from "@/types/recipe"

export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

function IngredientList({ingredients} : {ingredients : Set<string>}){ // how to have a aribitarry type like this

  const ingredientList = Array.from(ingredients).map((ingredient , i)=> {
    return <li key={i}>{ingredient}</li> // ids only have to be unique within the component they are in
  })

  return (
    <ul>
      {ingredientList}
    </ul>
  )
}
function getRecipeComponent(recipeItem : Recipe){

  return (// using div instead of li to avoid bullet point
    <div key={recipeItem.id}> 
    <h1> {recipeItem.name} </h1>
    <IngredientList ingredients={recipeItem.ingredients} />
    </div>
  )

}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(getRecipeComponent)}
    </div>
  );
}