import RecipeCard from '@/app/components/RecipeCard';
import { RecipeDetailPageProps } from '@/app/types';
import { getRecipeById } from '@/app/lib/recipes';
// import recipes from '@/app/data/recipes.json';

// Destructure {params} in order to get the dynamic information about the page we are visiting!
// Params is a promise so we will need to await it!
// It returns an object with an id!

export default async function RecipePage({ params }: RecipeDetailPageProps) {
  const { id } = await params;
  const recipe = await getRecipeById(id);
  return (
    <>
      <h1>{recipe.title}</h1>
      <RecipeCard recipe={recipe} />
    </>
  );
}
