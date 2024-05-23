import { useEffect } from "react"
import Landing from "./components/Landing"
import SpellsList from "../src/AllSpells.json";
import useClassStore from "@/lib/services/StoreService";

function App() {

  const { setSpellList, spellList} = useClassStore();

  useEffect(() => {
    const localData = localStorage.getItem('allSpells');
    if(!localData) {
      localStorage.setItem('allSpells', JSON.stringify(SpellsList))
      setSpellList(JSON.parse(localData))
    } else {
      setSpellList(JSON.parse(localData))
    }
  }, [setSpellList])

  return (
    <>
    <div className="p-4">
      <Landing />
    </div>
      
    </>
  )
}

export default App
