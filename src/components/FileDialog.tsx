import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useRef } from "react";
import useClassStore from "@/lib/services/StoreService";

const FileDialog = () => {
  const fileInputRef = useRef(null);
  const { setBookSpellList, setSpellList, bookSpellList } = useClassStore();

  const downloadLocalStorage = () => {
    if (bookSpellList.length > 0) {
      // Retrieve the JSON data from localStorage
      const favSpell = JSON.parse(localStorage.getItem("favoritedSpells"));
      const allSpell = JSON.parse(localStorage.getItem("allSpells"));

      const bothSpells = {
        favoritedSpells: favSpell,
        allSpells: allSpell,
      };

      const bothSpellsJson = JSON.stringify(bothSpells, null, 2);

      const blob = new Blob([bothSpellsJson], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      // Create a link element and trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.download = "combinedSpells.json";
      document.body.appendChild(link);
      link.click();

      // Clean up the link element and URL
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
    }
  };

  const uploadLocalStorage = (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.error("No file selected");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target.result);

        // Check if jsonData has the expected structure
        if (jsonData.favoritedSpells && jsonData.allSpells) {
          // Save the JSON data to localStorage

          localStorage.setItem("allSpells", JSON.stringify(jsonData.allSpells));
          let localData = localStorage.getItem("allSpells");
          setSpellList(JSON.parse(localData));

          localStorage.setItem(
            "favoritedSpells",
            JSON.stringify(jsonData.favoritedSpells)
          );
          localData = localStorage.getItem("favoritedSpells");
          console.log(localData);
          setBookSpellList(JSON.parse(localData));

          alert("Data successfully uploaded to localStorage");
        } else {
          console.error("Invalid JSON structure");
          alert("Invalid JSON structure");
        }
      } catch (error) {
        console.error("Error parsing JSON", error);
        alert("Error parsing JSON");
      }
    };

    reader.readAsText(file);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <BsThreeDotsVertical />
      </DialogTrigger>
      <DialogContent className="rounded-md size-90">
        <DialogHeader>
          <DialogTitle>Export / Import Spells</DialogTitle>
          <DialogDescription className="py-2 text-wrap">
            SpellBook will be deleted if cache is cleared, backup your spellbook
            via download.
          </DialogDescription>
        </DialogHeader>
        <Button
          className={bookSpellList.length > 0 ? "bg-green-600 p-1" : "bg-red-700 text-wrap p-1"}
          onClick={() => downloadLocalStorage()}
        >
          {bookSpellList.length > 0
            ? "Download Book"
            : "Favorite spells to enable download"}
        </Button>
        <input
        className="hidden"
          type="file"
          ref={fileInputRef}
          accept=".json"
          onChange={uploadLocalStorage}
        />
        <Button onClick={() => fileInputRef.current.click()}>
          Upload Book
        </Button>
        <DialogFooter className="text-slate-400 inline">
          Your DM <span className="text-red-500">&hearts;</span>'s you.
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FileDialog;
