import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import SpellAccordion from "./SpellAccordion";
import Search from "./Search";
import useClassStore from "@/lib/services/StoreService";

const Landing = () => {
  const { spellList, bookSpellList, bookView, setBookView } = useClassStore();

  //Move this into store
  //const [bookView, setBookView] = useState(false);

  useEffect(() => {}, [spellList, bookSpellList]);

  return (
    <div className="flex flex-col justify-center mt-2">
      <div className="flex justify-evenly">
        <Button
          className={bookView ? "" : "bg-accent"}
          variant="ghost"
          onClick={() => setBookView(false)}
        >
          Spells
        </Button>
        <Button
          className={bookView ? "bg-accent" : ""}
          variant="ghost"
          onClick={() => setBookView(true)}
        >
          Book
        </Button>
      </div>
      <Search />
      {bookView ? (
        <div className="flex flex-col justify-center items-center">
          {bookSpellList.map((spell, i) => (
            <SpellAccordion key={i} sp={spell} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          {spellList.map((spell, i) => (
            <SpellAccordion key={i} sp={spell} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Landing;
