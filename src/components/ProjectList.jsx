import ProjectItem from './ProjectItem';

export default function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <div className="text-center py-4 text-sm text-gray-500">No projects found.</div>;
  }

  return (
    <div className="flex flex-col">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}