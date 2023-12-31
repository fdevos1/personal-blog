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
  const postData = data && data.postBySlug;

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <>
      <div className="flex w-full h-full gap-2 px-4 py-4">
        <div className="flex flex-col w-full h-full">
          <h1 className="text-3xl font-bold">{postData.title}</h1>
          <h3 className="text-lg font-light">{postData.subtitle}</h3>

          <hr />

          <section className="mt-2">
            <p>{postData.body}</p>
          </section>
        </div>
        <div className="hidden flex flex-col w-1/2 h-full">
          <div className="flex flex-col w-80 h-96 bg-gray-50"></div>
        </div>
      </div>
    </>
  );
}
