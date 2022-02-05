import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { Ingredients } from "./Ingredients";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Ingredients />
    </QueryClientProvider>
  );
}

export default App;
