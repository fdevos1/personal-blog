import { useEffect, useState } from "react";
import useScrollDirection from "@/hooks/useScrollDirection";

export function Header() {
  const scrollDirection = useScrollDirection({ initialDirection: "down" });
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const headerButtons = [
    {
      name: "Homepage",
      uri: "/",
    },
    {
      name: "Sobre",
      uri: "/sobre-mim",
    },
    {
      name: "Contatos",
      uri: "/contato",
    },
  ];

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
      className={`w-full  h-20  backdrop-blur flex transition-all 
      `}
    >
      <div
        className={`flex w-full h-20  shadow-md px-4 bg-white
      fixed
      top-0 z-10
      ${
        scrollDirection === "down" && !scrolledToTop
          ? " translate-y-[calc(5rem*-1)]"
          : null
      }
            ${
              scrollDirection === "up" && !scrolledToTop
                ? "translate-y-0"
                : null
            }
      `}
      >
        <div className="flex w-full justify-center items-center gap-8">
          {headerButtons.map((item, i) => (
            <a href={item.uri} key={i} className="text-stone-950 font-semibold">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
