export default function ProjectItem({ project }) {
  return (
    <div className="flex gap-4 items-center py-3">
      <div className="w-12 h-12 border border-gray-400 flex-shrink-0 flex items-center justify-center relative bg-white">
        <svg 
          className="w-10 h-10 text-gray-400 absolute" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 20L20 4M4 4l16 16" />
        </svg>
      </div>
      
      <div className="flex flex-col">
        <h3 className="font-bold text-sm text-black">{project.title}</h3>
        <p className="text-xs text-black">{project.description}</p>
      </div>
    </div>
  );
}