import { BlogPost } from "@/components/BlogPost";
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

  console.log("data:", data.allPosts);
  console.log("loading:", loading);
  console.log("error:", error);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <>
      <main className="flex flex-col gap-8">
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
    </>
  );
}
