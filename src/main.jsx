
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchPage } from "./components/SearchPage/index.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/search" Component={SearchPage} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
