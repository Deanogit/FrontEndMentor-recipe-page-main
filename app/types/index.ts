// import type { ReactNode } from 'react';

// Data Types

export type Recipe = {
  image: string;
  id: number;
  title: string;
  description: string;
  preparationTime: {
    total: string;
    preparation: string;
    cooking: string;
  };
  ingredients: {
    ingredientsList: string[];
    optionalFillings: string[];
  };
  instructions: {
    id: number;
    title: string;
    directions: string;
  }[];
  nutrition: {
    tableDescription: string;
    nutritionalContent: string[][];
  };
};

export type Recipes = Recipe[];

// Page types

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type RecipeDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

// component types

export type ComponentProps = {
  recipe: Recipe;
};
