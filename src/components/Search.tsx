import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { debounce } from "@/lib/utils";
import { Spell } from "@/lib/types";
import { List, FilterClass, FilterClassNonOpinionated } from "@/lib/services/SpellService";
import { useEffect, useMemo, useState } from "react";
import FilterSheet from "./FilterSheet";

const Search = ({ setSpells }: any) => {

  const [isSelectedClass, setIsSelectedClass] = useState({
    Artificer: false,
    Barbarian: false,
    Bard: false,
    Cleric: false,
    Druid: false,
    Fighter: false,
    Monk: false,
    Paladin: false,
    Ranger: false,
    Rogue: false,
    Sorcerer: false,
    Warlock: false,
    Wizard: false,
  });

  const handleChange = useMemo(
    () =>
      debounce((e: { target: { value: string } }) => {

        let cur;
        //Handle if no classes are filtered, show all spells. Probably needs to be moved to Spellservice file
        const isAnyClassSelected = Object.values(isSelectedClass).some(value => value);        
        if(isAnyClassSelected){
          cur = List(e.target.value).filter((x: Spell) => FilterClassNonOpinionated(isSelectedClass, x))
        } else {
          cur = List(e.target.value)
        }
        cur ? setSpells(cur) : null;
      }, 250),
    [isSelectedClass]
  );

  return (
    <div className="flex items-center border-b px-3 mt-8">
      <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <input
        onChange={(e) => handleChange(e)}
        className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
      />
      <FilterSheet isSelectedClass={isSelectedClass} setIsSelectedClass={setIsSelectedClass}/>
    </div>
  );
};

export default Search;
