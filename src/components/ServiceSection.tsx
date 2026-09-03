import { Card, CustomFlowbiteTheme } from "flowbite-react";
import { serviceItems } from "../data/serviceItems";
import { Link } from "react-router-dom";

export default function ServiceSection() {
  const customTheme: CustomFlowbiteTheme["card"] = {
    root: {
      base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 hover:scale-105 ease-in-out duration-500",
      children: "flex h-full flex-col justify-center gap-4 p-6",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:max-w-xl md:flex-row",
      },
      href: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
    img: {
      base: "",
      horizontal: {
        off: "rounded-t-lg h-[200px]",
        on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
      },
    },
  };

  return (
    <section className="flex justify-center items-center flex-col" id="services">
      <div className="pt-10 flex justify-center items-center flex-col gap-5">
        <h1 className="font-semibold text-3xl">Pakketten</h1>
        <div className="max-w-[700px] m-auto text-center p-5">
          <p>
            Welkom bij dé all-in-one oplossing voor jouw feest! Met jarenlange ervaring in de evenementenbranche bieden wij een mobiele bar, party tent/discotheek, ervaren DJ’s én een foodtruck met
            diverse keukenopties. Of je nu een intiem feestje, bruiloft, bedrijfsfeest of groot festival organiseert, wij zorgen ervoor dat alles perfect is afgestemd op jouw wensen.
          </p>
        </div>
      </div>
      <section className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10 pt-10 pb-10 m-auto cursor-pointer">
        {serviceItems.map((i) => (
          <Link to={`/services/${i.id}`} key={i.id}>
            <Card theme={customTheme} className="w-full max-w-xs" imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc={i.src[0]}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{i.title}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 truncate">{i.description}</p>
            </Card>
          </Link>
        ))}
      </section>
    </section>
  );
}
