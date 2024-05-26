import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { debounce } from "@/lib/utils";
import { Spell } from "@/lib/types";
import {
  List,
  FilterClass,
  FilterClassNonOpinionated,
  FilterLevel,
  FilterVariant,
  FilterSubclass,
} from "@/lib/services/SpellService";
import { useEffect, useMemo, useState } from "react";
import FilterSheet from "./FilterSheet";
import useClassStore from "@/lib/services/StoreService";
import { VscClose } from "react-icons/vsc";

const Search = () => {
  const {
    bookView,
    setBookView,
    selectedLevel,
    selectedVariant,
    selectedClass,
    selectedSubClass,
    toggledSubClasses,
    spellList,
    setSpellList,
    bookSpellList,
    setBookSpellList,
    searchCriteria,
    setSearchCriteria,
  } = useClassStore();

  const handleChange = useMemo(
    () =>
      debounce((e: { target: { value: string } }) => {
        let cur;
        setSearchCriteria(e.target.value);

        cur = List(e.target.value, bookView).filter(
          (x: Spell) =>
            FilterLevel(selectedLevel, x) &&
            FilterClassNonOpinionated(selectedClass, x) &&
            FilterSubclass(toggledSubClasses, x)
        );

        bookView ? setBookSpellList(cur) : setSpellList(cur);
      }, 250),
    [
      selectedClass,
      selectedLevel,
      selectedSubClass,
      selectedVariant,
      bookView,
      searchCriteria,
      setSearchCriteria
    ]
  );

  //Fix the state so that pressing the exit icon clears the input and brings back the list of spells
  const searchExit = () => {
    setSearchCriteria("")
    document.getElementById('inputBox').value = ""
    if(bookView) {
      setBookSpellList(JSON.parse(localStorage.getItem('favoritedSpells')))
    } else {
      setSpellList(JSON.parse(localStorage.getItem('allSpells')))
    }
  }

  return (
    <div className="flex items-center border-b px-3 mt-8 bg-white rounded-2xl">
      <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <input
        id="inputBox"
        placeholder="Search Any Spell"
        onChange={(e) => handleChange(e)}
        className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
      />
      {searchCriteria !== "" ? <VscClose className="pr-3" size={30} onClick={() => searchExit()}/> : <></>}
      <FilterSheet />
    </div>
  );
};

export default Search;
