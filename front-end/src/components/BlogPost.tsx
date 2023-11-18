import blogPostImagePlaceholder from "@/assets/images/blogpost-image-placeholder.jpeg";

export function BlogPost() {
  return (
    <>
      <section className="flex w-full  relative h-60 lg:h-72">
        {/* TAG */}
        <div className="flex justify-center font-medium absolute left-4 top-2 rounded w-20 bg-emerald-500 z-10">
          <p className="text-white">TAG</p>
        </div>

        {/* CONTAINER */}
        <div className="flex flex-col md:flex-row md:gap-8 relative w-full">
          {/* TÍTULO E DESCRIÇÃO */}
          <div
            className="flex flex-col justify-between gap-2 px-4 py-2 md:pt-12
          absolute bottom-0 md:static
          w-full md:w-1/2 h-20 md:h-full 
          bg-black/50 md:bg-transparent z-10"
          >
            <div className="flex flex-col gap-2 md:gap-4">
              <p className="text-white text-2xl font-semibold md:text-stone-950">
                Hello World
              </p>
              <p className="text-white font-light md:text-stone-950">
                Lorem ipsum
              </p>
            </div>
            <a
              href={""}
              className="hidden md:flex  w-1/2 2xl:w-2/4 justify-center bg-sky-500 text-white rounded text-base font-semibold p-1 self-center"
            >
              Continuar lendo
            </a>
          </div>

          {/* IMAGEM */}
          <div className="w-full h-full md:w-1/2 ">
            <img
              className="w-full h-full object-cover rounded"
              src={blogPostImagePlaceholder}
              alt="blog-post-image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
