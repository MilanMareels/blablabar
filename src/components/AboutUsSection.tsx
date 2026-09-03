export default function AboutUsSection() {
  return (
    <section
      className="flex flex-wrap justify-center items-center gap-20 bg-[#231F1E] p-10 text-white"
      id="about"
    >
      <section className="max-w-full sm:w-full md:w-[500px]">
        <h1 className="font-semibold text-3xl">Over ons</h1>
        <p className="w-full mt-4">
          {" "}
          Welkom bij dé all-in-one oplossing voor jouw feest! Met jarenlange
          ervaring in de evenementenbranche bieden wij een mobiele bar, party
          tent/discotheek, ervaren DJ’s én een foodtruck met diverse
          keukenopties. Of je nu een intiem feestje, bruiloft, bedrijfsfeest of
          groot festival organiseert, wij zorgen ervoor dat alles perfect is
          afgestemd op jouw wensen.{" "}
        </p>
        <p className="w-full mt-4">
          Onze mobiele bar is volledig uitgerust voor elke gelegenheid, terwijl
          onze party tent de perfecte sfeer en ruimte biedt om te dansen en te
          genieten. Onze DJ’s zijn echte professionals die moeiteloos inspelen
          op elk thema en zorgen voor de juiste muziekbeleving. Of het nu gaat
          om een chique avond, een retro thema of een festival-vibe, wij maken
          het mogelijk.
        </p>
        <p className="w-full mt-4">
          Met ons topteam garanderen wij een vlekkeloos verloop van jouw
          evenement. Laat ons de zorgen uit handen nemen en maak van je feest
          een onvergetelijke ervaring!
        </p>
      </section>
      <section className="lg:w-[40%] w-full">
        <img
          className="rounded-2xl"
          src="/Blablabar_Logo_BIG.jpg"
          alt="blablabar logo"
        />
      </section>
    </section>
  );
}
