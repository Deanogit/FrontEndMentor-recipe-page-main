import RecipeBannerImage from '@/app/components/RecipeBannerImage';
import RecipeHeader from './RecipeHeader';
import RecipePrepTime from './RecipePrepTime';
import RecipeIngredients from './RecipeIngredients';
import RecipeInstruction from './RecipeInstruction';
import RecipeNutrition from './RecipeNutrition';

import type { ComponentProps } from '../types';

export default async function RecipeCard({ recipe }: ComponentProps) {
  return (
    <>
      <RecipeBannerImage recipe={recipe} />
      <RecipeHeader recipe={recipe} />
      <RecipePrepTime recipe={recipe} />
      <RecipeIngredients recipe={recipe} />
      <RecipeInstruction recipe={recipe} />
      <RecipeNutrition recipe={recipe} />
    </>
  );
}
