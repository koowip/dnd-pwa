import { Button } from "@/components/ui/button";
import { useState } from "react";
import SpellAccordion from "./SpellAccordion";
import Search from "./Search";

const Landing = () => {
  const [Spells, setSpells] = useState([]);


  return (
    <div className="flex flex-col justify-center mt-2">
      <div className="flex justify-evenly">
        <Button variant="ghost">Spells</Button>
        <Button variant="ghost">Book</Button>
        </div>
        <Search setSpells={setSpells}/>
      <div>
        {Spells.map((spell, i) => (
          <SpellAccordion key={i} sp={spell} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
