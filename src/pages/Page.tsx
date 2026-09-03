import { useCookies } from "react-cookie";
import AboutUsSection from "../components/AboutUsSection";
import ContactButton from "../components/ContactButton";
import ContactForm from "../components/ContactForm";
import CookieConsent from "../components/cookie/CookieConsent";
import Header from "../components/Header";
import ServiceSection from "../components/ServiceSection";

export default function Page() {
  const [cookies] = useCookies(["cookieContent"]);
  return (
    <main className="bg-[#F6F6F6]">
      <Header />
      <ContactButton />
      <ServiceSection />
      <AboutUsSection />
      <ContactForm />
      {!cookies.cookieContent && <CookieConsent />}
    </main>
  );
}
