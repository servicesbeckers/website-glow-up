import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  const featured = projects.slice(0, 6);

  if (featured.length === 0) return null;

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Projecten
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Bekijk een selectie van onze realisaties
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Ontdek hoe wij maatwerk in staal, RVS en aluminium vertalen naar
            duurzame en praktische oplossingen.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {projects.length > 6 && (
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/projecten">
                Alle projecten bekijken
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
