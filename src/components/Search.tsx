import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { debounce } from "@/lib/utils";
import { Spell } from "@/lib/types";
import { List, FilterClass} from "@/lib/services/SpellService";
import { useMemo } from "react";


const Search = ({setSpells}: any) => {
  
  const handleChange = useMemo(
    () =>
      debounce((e: { target: { value: string } }) => {
        console.log(e);
        const cur = List(e.target.value);
        //const cur = List(e.target.value).filter((x: Spell) => FilterClass(selectedClass, x))//FilterClass('Cleric', AllSpells)
        cur ? setSpells(cur) : null;
      }, 250),
    []
  );
  
  return ( 
      <div className="flex items-center border-b px-3 mt-8">
        <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <input
          onChange={(e) => handleChange(e)}
          className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
   );
}
 
export default Search;