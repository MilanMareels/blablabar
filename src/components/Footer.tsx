import { Footer } from "flowbite-react";
import { BsInstagram } from "react-icons/bs";

export default function FooterSection() {
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-center sm:flex sm:justify-between md:grid-cols-1">
          <div className="text-center">
            <h1 className="rosalia">{companyName.toUpperCase()}</h1>
          </div>
          <div className="grid grid-cols-3 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Over mij" />
              <Footer.LinkGroup col>
                <Footer.Link href="/#about">{companyName}</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Volg ons" />
              <Footer.LinkGroup col>
                <Footer.Link target="blank" href="https://www.instagram.com/blablabar.be?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="/privacy">Privacy Policy</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between text-center sm:text-left">
          <Footer.Copyright href="https://www.lannie.be" by={`${companyName}. Ontworpen en ontwikkeld door Lannie`} year={new Date().getFullYear()} />
          <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
            <Footer.Icon target="blank" href="https://www.instagram.com/blablabar.be?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" icon={BsInstagram} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
