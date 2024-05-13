import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { debounce } from "@/lib/utils";
import { Spell } from "@/lib/types";
import {
  List,
  FilterClass,
  FilterClassNonOpinionated,
  FilterLevel,
  FilterVariant,
  FilterSubclass
} from "@/lib/services/SpellService";
import { useMemo, useState } from "react";
import FilterSheet from "./FilterSheet";
import useClassStore from "@/lib/services/StoreService";

const Search = ({ setSpells }: any) => {
  const { selectedLevel, selectedVariant, selectedClass, selectedSubClass } = useClassStore();

  const handleChange = useMemo(
    () =>
      debounce((e: { target: { value: string } }) => {
        let cur;


        //This code gets any subclass string that is true out of the selectedSubClass state,
        //It's here so you only need to redo what subclasses are selected on search
        //Ideally there would be some zustand state that is the subs array any time a subclass is selected or unselected,
        //But i couldn't get that to work just yet. This will do for now
        const subs: any[] = []
        Object.keys(selectedSubClass).forEach((key) => {
          let a = (selectedSubClass[key].filter(subclass => Object.values(subclass)[0] === true).map(subclass => Object.keys(subclass)[0]))
          a.forEach(b => subs.push(b))
        })

        //Run each spell thru all filters, they return true if no filter selected in FilterSheet.tsx
        cur = List(e.target.value).filter((x: Spell) =>
          FilterClassNonOpinionated(selectedClass, x) &&
          FilterSubclass(subs, x) &&
          FilterLevel(selectedLevel,x) &&
          FilterVariant(selectedVariant, x))

        cur ? setSpells(cur) : null;
      }, 250),
    [selectedClass, selectedLevel, selectedSubClass, selectedVariant]
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
