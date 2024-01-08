/* 
MOSTRAR UMA IDE
FAZER UMA APRESENTAÇÃO PESSOAL NA IDE
EXEMPLO:

<h1>Felipe Devos</h1>
<h2>Full-Stack Developer</h2>
...
*/

import Line from "./Line";

export function About() {
  return (
    <aside className="hidden md:flex flex-col w-full h-full p-4 items-start shadow-md bg-ide-bg">
      <Line
        line={1}
        text={"export default class"}
        isEntity
        entityName={"AboutMe"}
      />

      <Line line={2} text={"constructor"} isContructor constructorText="" />
      <Line line={3} attribute={"name"} text={`"Felipe Devos"`} hasAttribute />
      <Line
        line={4}
        attribute={"stacks"}
        text={`"Full-Stack Developer"`}
        hasAttribute
      />
      <Line
        line={5}
        attribute={"languages"}
        text={`["Java", "Javascript", "Python"]`}
        hasAttribute
      />
      <Line
        line={6}
        attribute={"likes"}
        text={`["Coffee", "Fábio Akita"]`}
        hasAttribute
      />
      <Line line={7} attribute={"deslikes"} text={`"PHP"`} hasAttribute />
      <Line line={8} />
      <Line line={9} />
    </aside>
  );
}
