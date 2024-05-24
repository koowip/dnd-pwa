import { useEffect } from "react"
import Landing from "./components/Landing"
import SpellsList from "../src/AllSpells.json";
import useClassStore from "@/lib/services/StoreService";
import FileDialog from "./components/FileDialog";

function App() {

  const { setSpellList, spellList, setBookSpellList, bookSpellList } = useClassStore();

  useEffect(() => {
    const localData = localStorage.getItem('allSpells');
    if(!localData) {
      localStorage.setItem('allSpells', JSON.stringify(SpellsList))
      setSpellList(JSON.parse(localData))
    } else {
      setSpellList(JSON.parse(localData))
    }

    const fav = localStorage.getItem('favoritedSpells');
    if(!fav) {
      localStorage.setItem('favoritedSpells', JSON.stringify([]))
      setBookSpellList(JSON.parse(fav));
    } else {
      setBookSpellList(JSON.parse(fav));
    }
  }, [])

  return (
    <>
    <div className="p-4">
      <div className="absolute left-1 top-8 pl-1 -py-2">
        <FileDialog />
      </div>
      <Landing />
    </div>
      
    </>
  )
}

export default App
