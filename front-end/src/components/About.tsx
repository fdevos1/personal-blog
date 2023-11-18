/* 
MOSTRAR UMA IDE
FAZER UMA APRESENTAÇÃO PESSOAL NA IDE
EXEMPLO:

<h1>Felipe Devos</h1>
<h2>Full-Stack Developer</h2>
...
*/

export function About() {
  return (
    <>
      <aside className="flex flex-col w-full h-full p-4 items-center shadow-md rounded-lg gap-2 bg-white">
        <span>Full-Stack Developer</span>
        <span>
          Proeficiente em front-end apaixonado por back-end, criei esse blog
          como minha forma de gritar pro vazio.
        </span>

        <span>
          Os posts serão apenas meus pensamentos sobre o assunto que eu quero
          estudar, pode ser qualquer coisa, uma linguagem, um conceito, qualquer
          coisa que eu quiser.
        </span>
      </aside>
    </>
  );
}
