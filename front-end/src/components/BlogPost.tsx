import blogPostImagePlaceholder from "@/assets/images/blogpost-image-placeholder.jpeg";
import { PostTag } from "./PostTag";
import { IBlogPost } from "@/types/BlogPost";
import { useNavigate } from "react-router-dom";

export function BlogPost({ title, subtitle, slug }: Partial<IBlogPost>) {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex w-full  relative h-60 lg:h-72 hover:bg-black/10 hover:cursor-pointer transition-all rounded ">
        {/* TAG */}
        <PostTag />

        {/* CONTAINER */}
        <div className="flex flex-col md:flex-row md:gap-8 relative w-full">
          {/* TÍTULO E DESCRIÇÃO */}
          <a
            className="flex flex-col justify-between gap-2 px-4 py-2 md:pt-12
          absolute bottom-0 md:static
          w-full md:w-1/2 h-20 md:h-full 
          bg-black/50 md:bg-transparent z-10"
            href={slug}
          >
            <div className="flex flex-col gap-2 md:gap-4">
              <p className="text-white text-2xl font-semibold md:text-stone-950">
                {title}
              </p>
              <p className="text-white font-light md:text-stone-950">
                {subtitle}
              </p>
            </div>
            <button
              onClick={() => navigate({ pathname: slug })}
              className="hidden md:flex  w-1/2 2xl:w-2/4 justify-center bg-sky-500 text-white rounded text-base font-semibold p-1 self-center"
            >
              Continuar lendo
            </button>
          </a>

          {/* IMAGEM */}
          <div className="w-full h-full md:w-1/2 ">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={blogPostImagePlaceholder}
              alt="blog-post-image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
