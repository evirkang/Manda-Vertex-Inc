import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

function formatStatus(status?: Project["status"]): string | undefined {
  if (!status) return undefined;
  const map: Record<NonNullable<Project["status"]>, string> = {
    signed: "Signed",
    "in-development": "In development",
    delivered: "Delivered",
  };
  return map[status];
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card as="article">
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        {project.sector ? <span>{project.sector}</span> : null}
        {project.templateOnly ? (
          <span className="rounded-full border border-border px-2 py-0.5">
            Template · approval pending
          </span>
        ) : null}
        {project.status ? (
          <span className="rounded-full border border-border px-2 py-0.5">
            {formatStatus(project.status)}
          </span>
        ) : null}
      </div>
      <h3 className="mt-3 text-xl font-semibold text-foreground">
        {project.client ?? project.title}
      </h3>
      {project.sector ? (
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-accent">
          {project.sector}
        </p>
      ) : null}
      {project.challenge ? (
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
          {project.challenge}
        </p>
      ) : project.templateOnly ? (
        <p className="mt-2 text-sm text-muted-foreground">
          Client-approved project details will be added after verification and publication approval.
        </p>
      ) : null}
      <Link
        href={`/our-work/${project.slug}`}
        className="mt-4 inline-flex text-sm font-medium text-primary hover:text-accent"
      >
        {project.templateOnly ? "View case-study template" : "View case study"}
      </Link>
    </Card>
  );
}
