import { About } from "./About";
import { Hero } from "./Hero";

export function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-4 gap-10 overflow-auto">
        <div className="flex flex-col gap-2 h-[600px] md:flex-row md:h-[300px] md:w-2/3">
          <Hero />
          <About />
        </div>

        <div className="w-full flex flex-col gap-2">{children}</div>
      </div>
    </>
  );
}
