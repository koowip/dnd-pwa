import { Button } from "@/components/ui/button";
import SpellAccordion from "./SpellAccordion";
import Search from "./Search";
import useClassStore from "@/lib/services/StoreService";

const Landing = () => {
  const { spellList, bookSpellList, bookView, setBookView, clearSearch } = useClassStore();


  const clearUserInputs = () => {
    clearSearch()
    {/* @ts-ignore */}
    document.getElementById('inputBox').value = ''
  }

  const changeView = (viewBool: boolean) => {
    
    clearSearch()
    setBookView(viewBool)
    {/* @ts-ignore */}
    document.getElementById('inputBox').value = ''
  }

  return (
    <div className="flex flex-col justify-center mt-2">
      <div className="flex justify-evenly">
        <Button
          className={bookView ? "" : "bg-accent"}
          variant="ghost"
          onClick={() => changeView(false)}
        >
          Spells
        </Button>
        <Button
          className={bookView ? "bg-accent" : ""}
          variant="ghost"
          onClick={() => changeView(true)}
        >
          Book
        </Button>
        
        {/* Button to delete localstorage for easier troubleshooting in dev */}
        {import.meta.env.DEV && (
           <Button onClick={() => localStorage.clear()}>Delete</Button>
        )}
        
        <Button variant="destructive" onClick={clearUserInputs}>Clear Search</Button>
      </div>
      <Search />
      {bookView ? (
        <div className="flex flex-col justify-center items-center pt-2">
          {bookSpellList.map((spell, i) => (
            <SpellAccordion key={i} sp={spell} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center pt-2">
          {spellList.map((spell, i) => (
            <SpellAccordion key={i} sp={spell} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Landing;
