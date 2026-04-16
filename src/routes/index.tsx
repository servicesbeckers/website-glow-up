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
      { title: "Werkhuizen Beckers — Vakmanschap in staal, RVS en aluminium" },
      {
        name: "description",
        content:
          "Al meer dan 30 jaar uw specialist voor herstellingen, constructiewerk en maatwerk in staal, RVS en aluminium in Hasselt.",
      },
      { property: "og:title", content: "Werkhuizen Beckers — Vakmanschap in staal, RVS en aluminium" },
      {
        property: "og:description",
        content:
          "Al meer dan 30 jaar uw specialist voor herstellingen, constructiewerk en maatwerk in staal, RVS en aluminium.",
      },
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
