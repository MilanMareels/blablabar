import { CustomFlowbiteTheme, Navbar } from "flowbite-react";

export default function NavBarSection() {
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;

  const customTheme: CustomFlowbiteTheme["navbar"] = {
    link: {
      base: "block py-2 pl-3 pr-4 md:p-0",
      active: {
        on: "text-white dark:text-white md:bg-transparent md:text-cyan-700",
        off: "border-b border-gray-100 text-gray-700 hover:bg-black hover:text-white dark:border-gray-700 dark:text-gray-400 md:border-0 md:hover:bg-transparent md:hover:text-black md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: "",
      },
    },
  };

  return (
    <Navbar fluid rounded theme={customTheme} className="bg-[#F6F6F6]">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl dark:text-white rosalia">
          {companyName.toUpperCase()}
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-lg">
          Startpagina
        </Navbar.Link>
        <Navbar.Link href="/#services" className="text-lg">
          Pakketten
        </Navbar.Link>
        <Navbar.Link href="/#about" className="text-lg">
          Over ons
        </Navbar.Link>
        <Navbar.Link href="/#contact" className="text-lg">
          Contacteer ons
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
