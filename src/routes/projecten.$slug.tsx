import { createFileRoute, Link, useRouter, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { fetchProjectBySlug } from "@/lib/projects";
import { useState } from "react";

export const Route = createFileRoute("/projecten/$slug")({
  head: ({ loaderData }) => {
    const title = loaderData?.project?.title ?? "Project";
    return {
      meta: [
        { title: `${title} — Werkhuizen Beckers` },
        {
          name: "description",
          content: loaderData?.project?.summary ?? "",
        },
        { property: "og:title", content: `${title} — Werkhuizen Beckers` },
        {
          property: "og:description",
          content: loaderData?.project?.summary ?? "",
        },
      ],
    };
  },
  loader: async ({ params }) => {
    const result = await fetchProjectBySlug({ data: { slug: params.slug } });
    if (!result.project) {
      throw notFound();
    }
    return result;
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Project niet gevonden</h1>
        <p className="mt-2 text-muted-foreground">Dit project bestaat niet of is verwijderd.</p>
        <Link to="/projecten" className="mt-4 inline-block text-primary underline">
          Terug naar projecten
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Er ging iets mis.</p>
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
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { project, images } = Route.useLoaderData();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) return null;

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" size="sm" className="mb-8 gap-2">
            <Link to="/projecten">
              <ArrowLeft size={16} />
              Terug naar projecten
            </Link>
          </Button>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.material && (
              <Badge variant="secondary">{project.material}</Badge>
            )}
            {project.category && (
              <Badge variant="outline">{project.category}</Badge>
            )}
            {project.application && (
              <Badge variant="outline">{project.application}</Badge>
            )}
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h1>

          {project.body && (
            <div className="mt-6 max-w-3xl text-muted-foreground leading-relaxed whitespace-pre-line">
              {project.body}
            </div>
          )}

          {images.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-6 text-xl font-semibold">Galerij</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setSelectedImage(img)}
                    className="group overflow-hidden rounded-lg border border-border/50 bg-secondary"
                  >
                    <img
                      src={img}
                      alt={`${project.title} foto ${i + 1}`}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt={project.title}
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
          />
        </div>
      )}

      <Footer />
    </>
  );
}
