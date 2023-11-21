import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Homepage } from "./pages/Homepage";
import { Post } from "./pages/Post";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Homepage />
          </Layout>
        }
      />
      <Route
        path="/:slug"
        element={
          <Layout>
            <Post />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
