import { About } from "./About";
import { Header } from "./Header";
import { Hero } from "./Hero";

export function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />

      <div className="flex flex-col justify-center items-center p-4 gap-10 overflow-auto">
        <div className="flex flex-col w-full gap-4 h-[600px] max-w-[1200px] md:flex-row md:h-[300px] xl:w-2/3 mt-40">
          <Hero />
          <About />
        </div>

        <div className="w-full flex flex-col items-center xl:px-48 gap-10">
          <p className="font-bold text-4xl text-stone-950">Últimos posts</p>

          <div className="flex flex-col w-full">{children}</div>
        </div>
      </div>
    </>
  );
}
