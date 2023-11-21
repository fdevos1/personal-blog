import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

export function Post() {
  const pathname = useParams();

  const { slug } = pathname;

  const GET_BLOGPOST = gql`
    query post_by_slug($slug: String) {
      postBySlug(slug: $slug) {
        title
        subtitle
        body
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_BLOGPOST, {
    variables: {
      slug,
    },
  });
  const postData = data.postBySlug;

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <>
      <div className="flex flex-col w-full h-full gap-2">
        <h1 className="text-3xl font-bold">{postData.title}</h1>
        <h3 className="text-lg font-light">{postData.subtitle}</h3>

        <hr />

        <section className="mt-2">
          <p>{postData.body}</p>
        </section>
      </div>
    </>
  );
}
