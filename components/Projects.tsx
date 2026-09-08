import { projects } from "@/content/site";
import ProjectCard from "./ProjectCard";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  return (
    <section id="work" className="border-t border-rule px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel note="things I built and actually finished">
          Selected work
        </SectionLabel>

        <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
