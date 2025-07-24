import { getAllRecipes } from '../lib/recipes';
import Link from 'next/link';

export default async function RecipesList() {
  const data = await getAllRecipes();
  return (
    <>
      <ul>
        {data.map((recipe) => (
          <li key={recipe.id}>
            <Link href={`/recipes/${recipe.id}`}>
              <h2>{recipe.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
