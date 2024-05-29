type Entry = string | { type: string; [key: string]: any };

interface Spell {
  name: string;
  entries: Entry[];
}

interface SpellEntriesProps {
  spell: Spell;
}

const EntryRenderer: React.FC<{ entry: Entry }> = ({ entry }) => {
  if (typeof entry === "string") {
    return <p className="text-sm my-2">{entry}</p>;
  }

  if (typeof entry === "object" && entry.type) {
    switch (entry.type) {
      case "list":
        return (
          <ul>
            {entry.items.map((item: any, index: number) => (
              <li key={index}>
                <div className="m-2 my-4">
                  <EntryRenderer entry={item} />
                </div>
              </li>
            ))}
          </ul>
        );
      case "entries":
        return (
          <div>
            {entry.name && (
              <h4 className="mb-1 mt-4 font-semibold">{entry.name}: </h4>
            )}
            {entry.entries.map((subEntry: Entry, index: number) => (
              <div key={index}>
                <EntryRenderer entry={subEntry} />
              </div>
            ))}
          </div>
        );
      case "table":
        return (
          <div className="text-sm">
            <p>
              See table details{" "}
              <a className="text-blue-500 underline" href={entry.source} target="_blank">
                here
              </a>
              .
            </p>
          </div>
          // <table className="flex flex-col">
          //   {entry.caption && <caption>{entry.caption}</caption>}
          //   <thead>
          //     <tr>
          //       {entry.colLabels.map((label: string, index: number) => (
          //         <th key={index}>{label}</th>
          //       ))}
          //     </tr>
          //   </thead>
          //   <tbody>
          //     {entry.rows.map((row: any[], rowIndex: number) => (
          //       <tr key={rowIndex}>
          //         {row.map((cell: any, cellIndex: number) => (
          //           <td key={cellIndex}>
          //             {typeof cell === "object" ? JSON.stringify(cell) : cell}
          //           </td>
          //         ))}
          //       </tr>
          //     ))}
          //   </tbody>
          // </table>
        );
      default:
        return <p>Unsupported entry type: {entry.type}</p>;
    }
  }

  return <p>Invalid entry</p>;
};

const RenderEntries: React.FC<SpellEntriesProps> = ({ entries }: any) => {
  // Map through all entries and render them using renderEntry function
  return (
    <div>
      {entries.map((entry, index) => (
        <EntryRenderer key={index} entry={entry} />
      ))}
    </div>
  );
};

export default RenderEntries;
