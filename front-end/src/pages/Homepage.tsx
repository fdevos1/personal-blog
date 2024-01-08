import { About } from "@/components/About";
import { BlogPost } from "@/components/BlogPost";
import { Hero } from "@/components/Hero";
import { IBlogPost } from "@/types/BlogPost";

import { useQuery, gql } from "@apollo/client";

export function Homepage() {
  const GET_BLOGPOSTS = gql`
    query all_posts {
      allPosts {
        title
        subtitle
        slug
        body
        publishDate
        tags {
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_BLOGPOSTS);

  console.log("data:", data);
  console.log("loading:", loading);
  console.log("error:", error);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <>
      <div className="flex flex-col w-full gap-4 max-w-[1360px] lg:flex-row  ">
        <Hero />
        <About />
      </div>

      <div className="w-full flex flex-col items-center">
        <p className="font-bold text-4xl text-stone-950">Últimos posts</p>

        <div className="flex  w-full justify-center mt-10">
          <main className="flex flex-col  gap-8 bg-white p-8 rounded max-w-[1360px]">
            {data &&
              data.allPosts.map((post: IBlogPost) => (
                <BlogPost
                  key={post.id}
                  title={post.title}
                  subtitle={post.subtitle}
                  body={post.body}
                  slug={post.slug}
                  tags={post.tags}
                />
              ))}

            {data.allPosts.length <= 0 ? (
              <div className="flex justify-center">
                <p className="text-xl font-semibold text-stone-950">
                  Ops! Parece que não foi criado nenhum post ou não foi possível
                  contatar o servidor. Tente novamente.
                </p>
              </div>
            ) : null}
          </main>
        </div>
      </div>
    </>
  );
}
