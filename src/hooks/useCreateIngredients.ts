import { useMutation } from "react-query";

import { Ingredient } from "../ingredients.types";

function createIngredient(name: string): Promise<Ingredient> {
  return fetch("http://localhost:3001/ingredients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, id: Math.random() }),
  }).then((res) => res.json());
}

export const useCreateIngredients = () => useMutation(createIngredient);
