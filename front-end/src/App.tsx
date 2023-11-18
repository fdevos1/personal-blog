import { BlogPost } from "./components/BlogPost";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <main className="flex flex-col gap-8">
          <BlogPost />
          <BlogPost />
        </main>
      </Layout>
    </>
  );
}

export default App;
