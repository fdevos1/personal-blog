import { Header } from "./Header";

export function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />

      <div className="flex flex-col justify-center items-center p-8 md:px-20 md:py-10 lg:px-8 gap-10 overflow-auto">
        {children}
      </div>
    </div>
  );
}
