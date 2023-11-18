import blogPostImagePlaceholder from "@/assets/images/blogpost-image-placeholder.jpeg";

export function BlogPost() {
  return (
    <>
      <section className="flex w-full bg-white  shadow-md relative">
        <div className="flex justify-center font-medium absolute left-2 top-2 rounded w-10 bg-emerald-500 z-10">
          <p className="text-white">TAG</p>
        </div>
        <div className="flex flex-col relative w-full">
          {/* IMAGEM */}
          <div className="w-full h-60">
            <img
              className="w-full h-full object-cover"
              src={blogPostImagePlaceholder}
              alt="blog-post-image"
            />
          </div>

          {/* TÍTULO E DESCRIÇÃO */}
          <div className="flex flex-col gap-2  absolute bottom-0 w-full h-20 px-4 py-2 bg-black/50 z-10">
            <p className="text-white text-2xl font-semibold">Hello World</p>
            <p className="text-white font-light">Lorem ipsum</p>
          </div>
        </div>
        {/* TAG/CONTEÚDO */}
        {/* IMAGEM */}
      </section>
    </>
  );
}
