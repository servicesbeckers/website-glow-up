import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { fetchAllProjects } from "@/lib/projects";

export const Route = createFileRoute("/projecten/")({
  head: () => ({
    meta: [
      { title: "Projecten — Werkhuizen Beckers" },
      {
        name: "description",
        content:
          "Bekijk een selectie van maatwerkprojecten in staal, inox en aluminium, telkens met focus op toepassing, duurzaamheid en afwerking.",
      },
      { property: "og:title", content: "Projecten — Werkhuizen Beckers" },
      {
        property: "og:description",
        content:
          "Een selectie van uitgevoerde projecten in staal, inox en aluminium.",
      },
    ],
  }),
  loader: async () => {
    const { projects, error } = await fetchAllProjects();
    return { projects, error };
  },
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Er ging iets mis bij het laden van projecten.</p>
          <button
            className="mt-4 text-primary underline"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Opnieuw proberen
          </button>
        </div>
      </div>
    );
  },
  component: ProjectenPage,
});

function ProjectenPage() {
  const { projects, error } = Route.useLoaderData();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Realisaties
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Projecten
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Bekijk een selectie van maatwerkprojecten in staal, inox en
              aluminium, telkens met focus op toepassing, duurzaamheid en
              afwerking.
            </p>
          </div>

          {error && (
            <p className="mt-8 text-center text-muted-foreground">{error}</p>
          )}

          {projects.length > 0 ? (
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project: { slug: string; title: string; material: string; category: string; summary: string; cover: string; application: string; body: string }) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            !error && (
              <p className="mt-16 text-center text-muted-foreground">
                Nog geen projecten beschikbaar.
              </p>
            )
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
