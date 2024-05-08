import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { debounce } from "@/lib/utils";
import { Spell } from "@/lib/types";
import {
  List,
  FilterClass,
  FilterClassNonOpinionated,
} from "@/lib/services/SpellService";
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

  const [isSelectedSubClass, setIsSelectedSubClass] = useState({
    Artificer: [
      { "Alchemist": false },
      { "Armorer": false },
      { "Artillerist": false },
      { "Battle Smith": false },
    ],
    Barbarian: [
      { "Berserker": false },
      { "Totem Warrior": false },
      { "Ancestral Guardian": false },
      { "Storm Herald": false },
      { "Zealot": false },
      { "Beast": false },
      { "Wild Magic": false },
      { "Battlerager": false },
      { "Giant": false },
    ],
    Bard: [
      { "Lore": false },
      { "Valor": false },
      { "Glamour": false },
      { "Swords": false },
      { "Whispers": false },
      { "Creation": false },
      { "Spirits": false },
      { "Eloquence": false },
    ],
    Cleric: [
      { "Arcana": false },
      { "Death": false },
      { "Forge": false },
      { "Grave": false },
      { "Knowledge": false },
      { "Life": false },
      { "Light": false },
      { "Nature": false },
      { "Order": false },
      { "Peace": false },
      { "Tempest": false },
      { "Trickery": false },
      { "Twilight": false },
      { "War": false },
    ],
    Druid: [
      { "Dreams": false },
      { "Land": false },
      { "Moon": false },
      { "Shepherd": false },
      { "Spores": false },
      { "Stars": false },
      { "Wildfire": false },
    ],
    Fighter: [
      { "Champion": false },
      { "Battle Master": false },
      { "Eldritch Knight": false },
      { "Arcane Archer": false },
      { "Cavalier": false },
      { "Samurai": false },
      { "Psi Warrior": false },
      { "Rune Knight": false },
      { "Banneret": false },
      { "Echo Knight": false },
    ],
    Monk: [
      { "Open Hand": false },
      { "Shadow": false },
      { "Four Elements": false },
      { "Long Death": false },
      { "Sun Soul": false },
      { "Kensei": false },
      { "Tranquility": false },
      { "Astral Self": false },
      { "Mercy": false },
      { "Ascendant Dragon": false },
      { "Drunken Master": false },
    ],
    Paladin: [
      { "Devotion": false },
      { "Ancients": false },
      { "Vengeance": false },
      { "Crown": false },
      { "Conquest": false },
      { "Redemption": false },
      { "Watchers": false },
      { "Glory": false },
      { "Oathbreaker": false },
    ],
    Ranger: [
      { "Hunter": false },
      { "Beast Master": false },
      { "Gloom Stalker": false },
      { "Horizon Walker": false },
      { "Monster Slayer": false },
      { "Fey Wanderer": false },
      { "Swarmkeeper": false },
      { "Drakewarden": false },
    ],
    Rogue: [
      { "Thief": false },
      { "Assassin": false },
      { "Arcane Trickster": false },
      { "Mastermind": false },
      { "Swashbuckler": false },
      { "Inquisitive": false },
      { "Phantom": false },
      { "Soulknife": false },
      { "Scout": false },
    ],
    Sorcerer: [
      { "Draconic Bloodline": false },
      { "Wild Magic": false },
      { "Divine Soul": false },
      { "Shadow Magic": false },
      { "Storm Sorcery": false },
      { "Aberrant Mind": false },
      { "Clockwork Soul": false },
      { "Lunar Sorcery": false },
    ],
    Warlock: [
      { "Archfey": false },
      { "Fiend": false },
      { "Great Old One": false },
      { "Undying": false },
      { "Celestial": false },
      { "Hexblade": false },
      { "Fathomless": false },
      { "Genie": false },
      { "Undead": false },
    ],
    Wizard: [
      { "Abjuration": false },
      { "Conjuration": false },
      { "Divination": false },
      { "Enchantment": false },
      { "Evocation": false },
      { "Illusion": false },
      { "Necromancy": false },
      { "Transmutation": false },
      { "Chronurgy": false },
      { "Graviturgy": false },
      { "Bladesinging": false },
      { "Scribes": false },
      { "War Magic": false },
    ],
  });

  const handleChange = useMemo(
    () =>
      debounce((e: { target: { value: string } }) => {
        let cur;
        //Handle if no classes are filtered, show all spells. Probably needs to be moved to Spellservice file
        const isAnyClassSelected = Object.values(isSelectedClass).some(
          (value) => value
        );
        if (isAnyClassSelected) {
          cur = List(e.target.value).filter((x: Spell) =>
            FilterClassNonOpinionated(isSelectedClass, x)
          );
        } else {
          cur = List(e.target.value);
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
      <FilterSheet
        isSelectedClass={isSelectedClass}
        setIsSelectedClass={setIsSelectedClass}
        isSelectedSubClass={isSelectedSubClass}
        setIsSelectedSubClass={setIsSelectedSubClass}
      />
    </div>
  );
};

export default Search;
