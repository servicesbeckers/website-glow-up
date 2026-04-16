import { Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to="/projecten/$slug" params={{ slug: project.slug }}>
      <Card className="group overflow-hidden border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <img
            src={project.cover}
            alt={project.title}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute top-3 right-3 flex gap-2">
            {project.material && (
              <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                {project.material}
              </span>
            )}
          </div>
        </div>
        <div className="p-4">
          <div className="mb-1 text-xs font-medium text-primary">
            {project.category}
          </div>
          <h3 className="font-semibold">{project.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {project.summary}
          </p>
        </div>
      </Card>
    </Link>
  );
}
