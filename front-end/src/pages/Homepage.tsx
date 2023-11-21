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
      <div className="flex flex-col w-full gap-4 h-[600px] max-w-[1200px] md:flex-row md:h-[300px] xl:w-2/3 mt-10">
        <Hero />
        <About />
      </div>

      <div className="w-full flex flex-col items-center xl:px-48 gap-10">
        <p className="font-bold text-4xl text-stone-950">Últimos posts</p>

        <div className="flex flex-col w-full">
          <main className="flex flex-col gap-8 bg-white p-8 rounded">
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
          </main>
        </div>
      </div>
    </>
  );
}
