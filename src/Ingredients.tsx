import { useState } from "react";
import { useQueryClient } from "react-query";

import { useCreateIngredients } from "./hooks/useCreateIngredients";
import { useFetchIngredients } from "./hooks/useFetchIngredients";

export const Ingredients = () => {
  const { data, isLoading } = useFetchIngredients();
  const { mutateAsync } = useCreateIngredients();
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
      <p>Ingredients:</p>
      <div>
        <input type="text" value={ingredient} onChange={handleOnChange} />
        <button onClick={handleCreateIngredient}>Add</button>
      </div>

      <ul>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data?.map(({ name, id }) => (
            <li key={id} style={{ marginBottom: "36px" }}>
              <p>Name: {name}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

// function Todos() {
//     // Access the client
//     const queryClient = useQueryClient();

//     // Queries
//     const query = useQuery("todos", getTodos);

//     // Mutations
//     const mutation = useMutation(postTodo, {
//       onSuccess: () => {
//         // Invalidate and refetch
//         queryClient.invalidateQueries("todos");
//       },
//     });

//     return (
//       <div>
//         <ul>
//           {query.data.map((todo) => (
//             <li key={todo.id}>{todo.title}</li>
//           ))}
//         </ul>

//         <button
//           onClick={() => {
//             mutation.mutate({
//               id: Date.now(),
//               title: "Do Laundry",
//             });
//           }}
//         >
//           Add Todo
//         </button>
//       </div>
//     );
//   }
