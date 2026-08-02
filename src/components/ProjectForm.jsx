import { useState } from 'react';

export default function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;
    
    onAddProject(formData);
    setFormData({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="border border-gray-400 rounded-sm p-4 flex flex-col gap-4">
      <h2 className="font-bold text-md">Add Project</h2>
      
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="text-xs font-semibold">Title</label>
        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="border border-gray-400 px-2 py-1 text-sm outline-none focus:border-blue-500 rounded-sm"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="text-xs font-semibold">Description</label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="border border-gray-400 px-2 py-1 text-sm outline-none focus:border-blue-500 rounded-sm h-16 resize-none"
          required
        />
      </div>

      <div>
        <button 
          type="submit" 
          className="border border-gray-400 px-6 py-1 text-xs rounded-sm hover:bg-gray-100 transition-colors"
        >
          Add
        </button>
      </div>
    </form>
  );
}