import { useQuery } from "react-query";

import { Ingredient } from "../ingredients.types";

async function fetchIngredients(): Promise<Ingredient[]> {
  const response = await fetch("http://localhost:3001/ingredients");
  const data = await response.json();

  return data;
}

export const useFetchIngredients = () =>
  useQuery("ingredients", fetchIngredients);
