import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { debounce } from "@/lib/utils";
import { Spell } from "@/lib/types";
import {
  List,
  FilterClass,
  FilterClassNonOpinionated,
  FilterLevel
} from "@/lib/services/SpellService";
import { useMemo } from "react";
import FilterSheet from "./FilterSheet";
import useClassStore from "@/lib/services/StoreService";

const Search = ({ setSpells }: any) => {
 
  const { selectedLevel, selectedClass, selectedSubClass } = useClassStore();

  const handleChange = useMemo(
    () =>
      debounce((e: { target: { value: string } }) => {
        let cur;
        
        console.log(selectedLevel)
        
        cur = List(e.target.value).filter((x: Spell) =>
          FilterClassNonOpinionated(selectedClass, x) &&
          FilterLevel(selectedLevel,x))

        cur ? setSpells(cur) : null;
      }, 250),
    [selectedClass, selectedLevel]
  );

  return (
    <div className="flex items-center border-b px-3 mt-8">
      <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <input
        onChange={(e) => handleChange(e)}
        className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
      />
      <FilterSheet />
    </div>
  );
};

export default Search;
