import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Homepage } from "./pages/Homepage";

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
    </Routes>
  );
}

export default App;
