import { Button } from "flowbite-react";

export default function ContactButton() {
  return (
    <div className="flex items-center justify-center">
      <Button
        href="#contact"
        className="mt-10 w-[150px] rounded-none border-2 border-black bg-transparent text-black focus:ring-0"
      >
        Contacteer ons
      </Button>
    </div>
  );
}
