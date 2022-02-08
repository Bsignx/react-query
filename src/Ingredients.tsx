import { useState } from "react";
import { useQueryClient } from "react-query";

import { useCreateIngredients } from "./hooks/useCreateIngredients";
import { IngredientsList } from "./IngredientsList";

export const Ingredients = () => {
  const { mutateAsync, isLoading, isError, isSuccess } = useCreateIngredients();
  const queryClient = useQueryClient();

  const [ingredient, setIngredient] = useState<string>("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setIngredient(value);
  };

  const handleCreateIngredient = async () => {
    await mutateAsync(ingredient);
    queryClient.invalidateQueries("ingredients");
    setIngredient("");
  };

  return (
    <>
      <div>
        <input type="text" value={ingredient} onChange={handleOnChange} />
        {isLoading && <p>Creating ingredient...</p>}
        {isError ? <p>An error occurred</p> : null}
        {isSuccess ? <div>Ingredient added!</div> : null}
        <button onClick={handleCreateIngredient}>Add</button>
      </div>

      <p>Ingredients list:</p>
      <IngredientsList />
    </>
  );
};
