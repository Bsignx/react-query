import { useFetchIngredients } from "./hooks/useFetchIngredients";

export const IngredientsList = () => {
  const { data, isLoading, error } = useFetchIngredients();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An error has occurred</p>;

  return (
    <ul>
      {data?.map(({ name, id }) => (
        <li key={id} style={{ marginBottom: "36px" }}>
          <p>Name: {name}</p>
        </li>
      ))}
    </ul>
  );
};
