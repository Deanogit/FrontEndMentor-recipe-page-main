import type { ComponentProps } from '../types';

export default async function RecipePrepTime({ recipe }: ComponentProps) {
  return (
    <>
      <h3>Preparation Time</h3>
      <ul>
        <li>
          <p>
            <span>Total:</span>
            {recipe.preparationTime.total}
          </p>
        </li>
        <li>
          <p>
            <span>Preparation:</span>
            {recipe.preparationTime.preparation}
          </p>
        </li>
        <li>
          <p>
            <span>Cooking:</span>
            {recipe.preparationTime.cooking}
          </p>
        </li>
      </ul>
    </>
  );
}
