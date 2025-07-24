import type { ComponentProps } from '../types';

export default async function RecipeNutrition({ recipe }: ComponentProps) {
  return (
    <>
      <h2>Nutrition</h2>
      <p>{recipe.nutrition.tableDescription}</p>
      <ul>
        {recipe.nutrition.nutritionalContent.map((nutri, index) => (
          <li key={index}>
            <p>
              <span>{nutri[0]}</span>
              <span>{nutri[1]}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
