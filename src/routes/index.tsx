import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Werkhuizen Beckers Hasselt — Metaalbewerking, Staal, RVS & Aluminium op Maat" },
      {
        name: "description",
        content:
          "Werkhuizen Beckers in Hasselt: al meer dan 30 jaar specialist in metaalbewerking, staalconstructies, RVS werken, aluminium, herstellingen en maatwerk in metaal. Vakmanschap in Limburg.",
      },
      {
        name: "keywords",
        content:
          "metaalbewerking Hasselt, metaalconstructies Limburg, staalconstructies op maat, RVS werken Hasselt, aluminium constructies, maatwerk metaal Limburg, herstellingen metaal, laswerken Hasselt, balustrades op maat, trappen staal, metalen trappen, stalen deuren, poorten op maat, bordessen op maat, metaalwerken Hasselt, inox op maat, plaatbewerking Limburg, industrieel metaalwerk, constructiewerk Hasselt, werkhuizen Beckers",
      },
      { property: "og:title", content: "Werkhuizen Beckers Hasselt — Metaalbewerking & Maatwerk in Staal, RVS en Aluminium" },
      {
        property: "og:description",
        content:
          "Al meer dan 30 jaar uw specialist voor metaalbewerking, staalconstructies, herstellingen en maatwerk in staal, RVS en aluminium in Hasselt en Limburg.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nl_BE" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Projects />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
