import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { fetchAllProjects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Werkhuizen Beckers — Vakwerk in staal, RVS en aluminium" },
      {
        name: "description",
        content:
          "Werkhuizen Beckers realiseert duurzame en functionele oplossingen op maat in staal, RVS en aluminium voor particulieren en professionele toepassingen.",
      },
      { property: "og:title", content: "Werkhuizen Beckers — Vakwerk in staal, RVS en aluminium" },
      {
        property: "og:description",
        content:
          "Duurzame en functionele oplossingen op maat in staal, RVS en aluminium.",
      },
    ],
  }),
  loader: async () => {
    const { projects } = await fetchAllProjects();
    return { projects };
  },
  component: Index,
});

function Index() {
  const { projects } = Route.useLoaderData();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <FeaturedProjects projects={projects} />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
