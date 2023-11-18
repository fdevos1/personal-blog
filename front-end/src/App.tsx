import { BlogPost } from "./components/BlogPost";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Header />

      <Layout>
        <main>
          <BlogPost />
        </main>
      </Layout>
    </>
  );
}

export default App;
