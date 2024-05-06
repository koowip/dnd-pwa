import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { List, FilterClass} from "@/lib/services/SpellService";
import { useState, useMemo } from "react";
import SpellAccordion from "./SpellAccordion";
import { debounce } from "@/lib/utils";
import { Spell } from "@/lib/types";

const Landing = () => {
  const [Spells, setSpells] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");


  const handleChange = useMemo(
    () =>
      debounce((e: { target: { value: string } }) => {
        setSelectedClass('Sorcerer');
        console.log(e);
        // const cur = List(e.target.value);
        const cur = List(e.target.value).filter((x: Spell) => FilterClass(selectedClass, x))//FilterClass('Cleric', AllSpells)
        cur ? setSpells(cur) : null;
      }, 250),
    [selectedClass]
  );


  return (
    <div className="flex flex-col justify-center mt-2">
      <div className="flex justify-evenly">
        <Button variant="ghost">Spells</Button>
        <Button variant="ghost">Book</Button>
      </div>
      <div className="flex items-center border-b px-3 mt-8">
        <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <input
          onChange={(e) => handleChange(e)}
          className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <div>
        {Spells.map((spell, i) => (
          <SpellAccordion key={i} sp={spell} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
