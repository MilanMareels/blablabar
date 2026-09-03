import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import { headerImages } from "../data/headerImages";

export default function Header() {
  const customTheme: CustomFlowbiteTheme["carousel"] = {
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
      snap: "snap-x",
    },
  };
  return (
    <header>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-[600px]">
        <Carousel slideInterval={3000} theme={customTheme}>
          {headerImages.map((image, i) => (
            <img
              src={image.image}
              alt={`Sfeer-foto-blablabar-${i + 1}`}
              key={i}
            />
          ))}
        </Carousel>
      </div>
    </header>
  );
}
