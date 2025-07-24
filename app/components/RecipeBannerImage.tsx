import Image from 'next/image';
// import type { Recipe } from '../types';
// TODO:
// Get the data from the recipes data to get the image dynamically

import { ComponentProps } from '../types';

export default function RecipeBannerImage({ recipe }: ComponentProps) {
  return (
    <>
      <Image
        src={`/${recipe.image}`}
        alt={recipe.title}
        width={1312}
        height={600}
        priority
      />
    </>
  );
}
