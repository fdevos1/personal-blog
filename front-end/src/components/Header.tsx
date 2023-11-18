export function Header() {
  return (
    <header>
      <div className="flex w-full h-20 items-center justify-between shadow-md px-4 bg-white">
        <div>Logo</div>

        <div className="flex gap-2">
          {["Homepage", "Sobre", "Contatos"].map((title) => (
            <button className="text-stone-950 font-semibold">{title}</button>
          ))}
        </div>
      </div>
    </header>
  );
}
