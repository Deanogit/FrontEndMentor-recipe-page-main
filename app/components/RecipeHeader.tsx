import { ComponentProps } from '../types';

export default async function RecipeHeader({ recipe }: ComponentProps) {
  return (
    <>
      <h1>{recipe.title}</h1>
      <h2>{recipe.description}</h2>
    </>
  );
}
