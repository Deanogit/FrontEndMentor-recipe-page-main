import type { ComponentProps } from '../types';

export default async function RecipeIngredients({ recipe }: ComponentProps) {
  return (
    <>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.ingredientsList.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
        <li>
          Optional fillings:{' '}
          {recipe.ingredients.optionalFillings
            .map((ingredient) => ingredient)
            .join(', ')}
        </li>
      </ul>
    </>
  );
}
