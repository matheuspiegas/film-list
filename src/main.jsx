import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchPage } from "./components/SearchPage/index.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./components/Home/index.jsx";
import GlobalStyle from "../src/Styles/GlobalStyles.jsx";
import { Movie } from "./components/Movie/index.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/search" Component={SearchPage} />
        <Route path="/movie/:movieId" Component={Movie} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </QueryClientProvider>
);
