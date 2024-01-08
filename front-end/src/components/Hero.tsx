import profilePic from "@/assets/images/profile.jpeg";
import Icon from "./icons/icon";
import personalData from "@/data/personalData";

export function Hero() {
  return (
    <>
      <div className="flex flex-col w-full p-4 justify-center items-center shadow-md rounded-lg gap-4 bg-white">
        {/* PROFILE PIC */}
        <div className="flex w-36 h-36 border-4 border-sky-400 rounded-full">
          <img
            className="object-cover rounded-full"
            src={profilePic}
            alt="felipe-devos"
          />
        </div>

        {/* PERSONAL INFOS & LINKS */}

        <div className="flex flex-col items-center w-full gap-2">
          <h2 className="text-3xl font-bold">Felipe Devos</h2>

          <ul className="flex gap-8 justify-between mt-2">
            {personalData.map(
              ({ name, url }: { name: string; url: string }, i: number) => {
                return (
                  <li key={i}>
                    <a
                      href={url}
                      target="_blank"
                      className="text-stone-950 hover:text-sky-400"
                    >
                      <Icon name={name} />
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
