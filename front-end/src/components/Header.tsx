import { useEffect, useState } from "react";
import useScrollDirection from "@/hooks/useScrollDirection";

export function Header() {
  const scrollDirection = useScrollDirection({ initialDirection: "down" });
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {}, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed h-20 top-0 z-10 backdrop-blur flex transition-all ${
        scrollDirection === "down" && !scrolledToTop
          ? " translate-y-[calc(5rem*-1)]"
          : null
      }
      ${scrollDirection === "up" && !scrolledToTop ? "translate-y-0" : null}
      `}
    >
      <div className="flex w-full h-20  shadow-md px-4 bg-white">
        <div className="flex w-full justify-center gap-8">
          {["Homepage", "Sobre", "Contatos"].map((title, i) => (
            <button key={i} className="text-stone-950 font-semibold">
              {title}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
