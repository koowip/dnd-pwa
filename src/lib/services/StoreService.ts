import { create } from 'zustand';

// Define the structure for subclasses
interface Subclass {
  [subclass: string]: boolean;
}

// Define the structure for each class's subclasses array
interface ClassSubclasses {
  [className: string]: Subclass[];
}

interface StoreState {
  selectedClass: { [key: string]: boolean };
  selectedSubClass: ClassSubclasses;
  toggleClass: (className: string) => void;
  toggleSubClass: (className: string, subclassName: string) => void;
}


const useClassStore = create<StoreState>((set) => ({
  
  selectedClass: { 
    "Artificer": false,
    "Barbarian": false,
    "Bard": false,
    "Cleric": false,
    "Druid": false,
    "Fighter": false,
    "Monk": false,
    "Paladin": false,
    "Ranger": false,
    "Rogue": false,
    "Sorcerer": false,
    "Warlock": false,
    "Wizard": false, },

  selectedSubClass: {
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
    },

  toggleClass: (className) => set(state => ({
    selectedClass: {
      ...state.selectedClass,
      [className]: !state.selectedClass[className]
    }
  })),

  toggleSubClass: (className, subclassName) => set((state) => ({
    selectedSubClass: {
      ...state.selectedSubClass,
      [className]: state.selectedSubClass[className].map((subclass) => ({
        ...subclass,
        [subclassName]: !subclass[subclassName]
      }))
    }
  }))
}));
export default useClassStore


// { Artificer: false,
// Barbarian: false,
// Bard: false,
// Cleric: false,
// Druid: false,
// Fighter: false,
// Monk: false,
// Paladin: false,
// Ranger: false,
// Rogue: false,
// Sorcerer: false,
// Warlock: false,
// Wizard: false, }



// {
//   Artificer: [
//     { "Alchemist": false },
//     { "Armorer": false },
//     { "Artillerist": false },
//     { "Battle Smith": false },
//   ],
//   Barbarian: [
//     { "Berserker": false },
//     { "Totem Warrior": false },
//     { "Ancestral Guardian": false },
//     { "Storm Herald": false },
//     { "Zealot": false },
//     { "Beast": false },
//     { "Wild Magic": false },
//     { "Battlerager": false },
//     { "Giant": false },
//   ],
//   Bard: [
//     { "Lore": false },
//     { "Valor": false },
//     { "Glamour": false },
//     { "Swords": false },
//     { "Whispers": false },
//     { "Creation": false },
//     { "Spirits": false },
//     { "Eloquence": false },
//   ],
//   Cleric: [
//     { "Arcana": false },
//     { "Death": false },
//     { "Forge": false },
//     { "Grave": false },
//     { "Knowledge": false },
//     { "Life": false },
//     { "Light": false },
//     { "Nature": false },
//     { "Order": false },
//     { "Peace": false },
//     { "Tempest": false },
//     { "Trickery": false },
//     { "Twilight": false },
//     { "War": false },
//   ],
//   Druid: [
//     { "Dreams": false },
//     { "Land": false },
//     { "Moon": false },
//     { "Shepherd": false },
//     { "Spores": false },
//     { "Stars": false },
//     { "Wildfire": false },
//   ],
//   Fighter: [
//     { "Champion": false },
//     { "Battle Master": false },
//     { "Eldritch Knight": false },
//     { "Arcane Archer": false },
//     { "Cavalier": false },
//     { "Samurai": false },
//     { "Psi Warrior": false },
//     { "Rune Knight": false },
//     { "Banneret": false },
//     { "Echo Knight": false },
//   ],
//   Monk: [
//     { "Open Hand": false },
//     { "Shadow": false },
//     { "Four Elements": false },
//     { "Long Death": false },
//     { "Sun Soul": false },
//     { "Kensei": false },
//     { "Tranquility": false },
//     { "Astral Self": false },
//     { "Mercy": false },
//     { "Ascendant Dragon": false },
//     { "Drunken Master": false },
//   ],
//   Paladin: [
//     { "Devotion": false },
//     { "Ancients": false },
//     { "Vengeance": false },
//     { "Crown": false },
//     { "Conquest": false },
//     { "Redemption": false },
//     { "Watchers": false },
//     { "Glory": false },
//     { "Oathbreaker": false },
//   ],
//   Ranger: [
//     { "Hunter": false },
//     { "Beast Master": false },
//     { "Gloom Stalker": false },
//     { "Horizon Walker": false },
//     { "Monster Slayer": false },
//     { "Fey Wanderer": false },
//     { "Swarmkeeper": false },
//     { "Drakewarden": false },
//   ],
//   Rogue: [
//     { "Thief": false },
//     { "Assassin": false },
//     { "Arcane Trickster": false },
//     { "Mastermind": false },
//     { "Swashbuckler": false },
//     { "Inquisitive": false },
//     { "Phantom": false },
//     { "Soulknife": false },
//     { "Scout": false },
//   ],
//   Sorcerer: [
//     { "Draconic Bloodline": false },
//     { "Wild Magic": false },
//     { "Divine Soul": false },
//     { "Shadow Magic": false },
//     { "Storm Sorcery": false },
//     { "Aberrant Mind": false },
//     { "Clockwork Soul": false },
//     { "Lunar Sorcery": false },
//   ],
//   Warlock: [
//     { "Archfey": false },
//     { "Fiend": false },
//     { "Great Old One": false },
//     { "Undying": false },
//     { "Celestial": false },
//     { "Hexblade": false },
//     { "Fathomless": false },
//     { "Genie": false },
//     { "Undead": false },
//   ],
//   Wizard: [
//     { "Abjuration": false },
//     { "Conjuration": false },
//     { "Divination": false },
//     { "Enchantment": false },
//     { "Evocation": false },
//     { "Illusion": false },
//     { "Necromancy": false },
//     { "Transmutation": false },
//     { "Chronurgy": false },
//     { "Graviturgy": false },
//     { "Bladesinging": false },
//     { "Scribes": false },
//     { "War Magic": false },
//   ],
// }