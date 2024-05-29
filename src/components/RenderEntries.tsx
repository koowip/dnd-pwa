const RenderEntries = ({ entries }: any) => {

  //Control Flames, need to render list as well
  // Function to render each entry
  const renderEntry = (entry: any) => {
    // Handle if the entry is a simple string
    if (typeof entry === 'string') {
      return <div className="text-sm">{entry}</div>;
    }

    // Handle if the entry is an object with nested entries
    if (entry && typeof entry === 'object' && entry.entries) {
      return (
        <div>
          {/* Optional: Render the name of the entry type if it exists */}
          {entry.name && <div className="text-sm font-bold">{entry.name}</div>}
          {/* Recursively render nested entries */}
          <RenderEntries entries={entry.entries} />
        </div>
      );
    }

    // Default fallback if entry is neither string nor expected object format
    return null;
  };

  // Map through all entries and render them using renderEntry function
  return (
    <div>
      {entries.map((entry: any, index: any) => (
        <div key={index}>{renderEntry(entry)}</div>
      ))}
    </div>
  );
};
 
export default RenderEntries