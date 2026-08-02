export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="w-full border-b border-gray-400 pb-3">
      <input
        type="text"
        placeholder="Search Projects"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full border border-gray-400 px-2 py-1 text-sm outline-none focus:border-blue-500 rounded-sm"
      />
    </div>
  );
}