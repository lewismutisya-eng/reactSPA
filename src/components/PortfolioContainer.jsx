import { useState } from 'react';
import SearchBar from './SearchBar';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';

const initialData = [
  { id: 1, title: 'Project 1', description: 'Description of the project' },
  { id: 2, title: 'Project 2', description: 'Description of the project' },
  { id: 3, title: 'Project 3', description: 'Description of the project' },
];

export default function PortfolioContainer() {
  const [projects, setProjects] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddProject = (newProject) => {
    setProjects([{ ...newProject, id: Date.now() }, ...projects]);
  };

  return (
    <div className="space-y-4">
      <ProjectForm onAddProject={handleAddProject} />
      
      <div className="border border-gray-400 rounded-sm p-3 flex flex-col gap-3">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
}