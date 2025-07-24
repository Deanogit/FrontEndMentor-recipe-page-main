import type { ComponentProps } from '../types';

export default async function RecipeInstruction({ recipe }: ComponentProps) {
  return (
    <>
      <h2>Ingredients</h2>
      <ol>
        {recipe.instructions.map((instruction) => (
          <li key={instruction.id}>
            <p>
              <span>{instruction.title}</span> {instruction.directions}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}
