import { create } from "zustand";
interface Subclass {
  [subclass: string]: boolean;
}

interface ClassSubclasses {
  [className: string]: Subclass[];
}

//Add state function to revert class,subclass,level selections to default
//Call when switching from book and spells, IE on setBookView
interface StoreState {
  bookView: boolean;
  spellList: any[];
  bookSpellList: any[];
  selectedLevel: number;
  selectedVariant: boolean;
  selectedClass: { [key: string]: boolean };
  selectedSubClass: ClassSubclasses;
  toggledSubClasses: string[];
  searchCriteria: string;
  setSearchCriteria: (param: string) => void;
  clearSearch: () => void;
  addFavorite: (spell: any) => void;
  removeFavorite: (spell: any) => void;
  setBookView: (toggle: boolean) => void;
  setSpellList: (spells: any[]) => void;
  setBookSpellList: (spells: any[]) => void;
  changeLevelSelection: (level: number) => void;
  toggleVariant: () => void;
  toggleClass: (className: string) => void;
  toggleSubClass: (className: string, subclassName: string) => void;
  toggleOffSubClasses: (className: string) => void;
  updateToggledSubClasses: (subClasses: ClassSubclasses) => void;
}

const useClassStore = create<StoreState>((set) => ({
  bookView: false,

  spellList: [],

  bookSpellList: [],

  selectedLevel: -1,

  selectedClass: {
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
  },

  selectedVariant: false,

  selectedSubClass: {
    Artificer: [
      { Alchemist: false },
      { Armorer: false },
      { Artillerist: false },
      { "Battle Smith": false },
    ],
    Barbarian: [
      { Berserker: false },
      { "Totem Warrior": false },
      { "Ancestral Guardian": false },
      { "Storm Herald": false },
      { Zealot: false },
      { Beast: false },
      { "Wild Magic": false },
      { Battlerager: false },
      { Giant: false },
    ],
    Bard: [
      { Lore: false },
      { Valor: false },
      { Glamour: false },
      { Swords: false },
      { Whispers: false },
      { Creation: false },
      { Spirits: false },
      { Eloquence: false },
    ],
    Cleric: [
      { Arcana: false },
      { Death: false },
      { Forge: false },
      { Grave: false },
      { Knowledge: false },
      { Life: false },
      { Light: false },
      { Nature: false },
      { Order: false },
      { Peace: false },
      { Tempest: false },
      { Trickery: false },
      { Twilight: false },
      { War: false },
    ],
    Druid: [
      { Dreams: false },
      { Land: false },
      { Moon: false },
      { Shepherd: false },
      { Spores: false },
      { Stars: false },
      { Wildfire: false },
    ],
    Fighter: [
      { Champion: false },
      { "Battle Master": false },
      { "Eldritch Knight": false },
      { "Arcane Archer": false },
      { Cavalier: false },
      { Samurai: false },
      { "Psi Warrior": false },
      { "Rune Knight": false },
      { Banneret: false },
      { "Echo Knight": false },
    ],
    Monk: [
      { "Open Hand": false },
      { Shadow: false },
      { "Four Elements": false },
      { "Long Death": false },
      { "Sun Soul": false },
      { Kensei: false },
      { Tranquility: false },
      { "Astral Self": false },
      { Mercy: false },
      { "Ascendant Dragon": false },
      { "Drunken Master": false },
    ],
    Paladin: [
      { Devotion: false },
      { Ancients: false },
      { Vengeance: false },
      { Crown: false },
      { Conquest: false },
      { Redemption: false },
      { Watchers: false },
      { Glory: false },
      { Oathbreaker: false },
    ],
    Ranger: [
      { Hunter: false },
      { "Beast Master": false },
      { "Gloom Stalker": false },
      { "Horizon Walker": false },
      { "Monster Slayer": false },
      { "Fey Wanderer": false },
      { Swarmkeeper: false },
      { Drakewarden: false },
    ],
    Rogue: [
      { Thief: false },
      { Assassin: false },
      { "Arcane Trickster": false },
      { Mastermind: false },
      { Swashbuckler: false },
      { Inquisitive: false },
      { Phantom: false },
      { Soulknife: false },
      { Scout: false },
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
      { Archfey: false },
      { Fiend: false },
      { "Great Old One": false },
      { Undying: false },
      { Celestial: false },
      { Hexblade: false },
      { Fathomless: false },
      { Genie: false },
      { Undead: false },
    ],
    Wizard: [
      { Abjuration: false },
      { Conjuration: false },
      { Divination: false },
      { Enchantment: false },
      { Evocation: false },
      { Illusion: false },
      { Necromancy: false },
      { Transmutation: false },
      { Chronurgy: false },
      { Graviturgy: false },
      { Bladesinging: false },
      { Scribes: false },
      { "War Magic": false },
    ],
  },

  toggledSubClasses: [],

  searchCriteria: "",

  setSearchCriteria: (param) => set(() => ({
    searchCriteria: param,
  })),

  clearSearch: () =>
    set((state) => ({
      searchCriteria: "",
      spellList: JSON.parse(localStorage.getItem('allSpells')),
      bookSpellList: JSON.parse(localStorage.getItem('favoritedSpells')),
      selectedLevel: -1,
      selectedClass: {
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
      },
      selectedSubClass: {
        Artificer: [
          { Alchemist: false },
          { Armorer: false },
          { Artillerist: false },
          { "Battle Smith": false },
        ],
        Barbarian: [
          { Berserker: false },
          { "Totem Warrior": false },
          { "Ancestral Guardian": false },
          { "Storm Herald": false },
          { Zealot: false },
          { Beast: false },
          { "Wild Magic": false },
          { Battlerager: false },
          { Giant: false },
        ],
        Bard: [
          { Lore: false },
          { Valor: false },
          { Glamour: false },
          { Swords: false },
          { Whispers: false },
          { Creation: false },
          { Spirits: false },
          { Eloquence: false },
        ],
        Cleric: [
          { Arcana: false },
          { Death: false },
          { Forge: false },
          { Grave: false },
          { Knowledge: false },
          { Life: false },
          { Light: false },
          { Nature: false },
          { Order: false },
          { Peace: false },
          { Tempest: false },
          { Trickery: false },
          { Twilight: false },
          { War: false },
        ],
        Druid: [
          { Dreams: false },
          { Land: false },
          { Moon: false },
          { Shepherd: false },
          { Spores: false },
          { Stars: false },
          { Wildfire: false },
        ],
        Fighter: [
          { Champion: false },
          { "Battle Master": false },
          { "Eldritch Knight": false },
          { "Arcane Archer": false },
          { Cavalier: false },
          { Samurai: false },
          { "Psi Warrior": false },
          { "Rune Knight": false },
          { Banneret: false },
          { "Echo Knight": false },
        ],
        Monk: [
          { "Open Hand": false },
          { Shadow: false },
          { "Four Elements": false },
          { "Long Death": false },
          { "Sun Soul": false },
          { Kensei: false },
          { Tranquility: false },
          { "Astral Self": false },
          { Mercy: false },
          { "Ascendant Dragon": false },
          { "Drunken Master": false },
        ],
        Paladin: [
          { Devotion: false },
          { Ancients: false },
          { Vengeance: false },
          { Crown: false },
          { Conquest: false },
          { Redemption: false },
          { Watchers: false },
          { Glory: false },
          { Oathbreaker: false },
        ],
        Ranger: [
          { Hunter: false },
          { "Beast Master": false },
          { "Gloom Stalker": false },
          { "Horizon Walker": false },
          { "Monster Slayer": false },
          { "Fey Wanderer": false },
          { Swarmkeeper: false },
          { Drakewarden: false },
        ],
        Rogue: [
          { Thief: false },
          { Assassin: false },
          { "Arcane Trickster": false },
          { Mastermind: false },
          { Swashbuckler: false },
          { Inquisitive: false },
          { Phantom: false },
          { Soulknife: false },
          { Scout: false },
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
          { Archfey: false },
          { Fiend: false },
          { "Great Old One": false },
          { Undying: false },
          { Celestial: false },
          { Hexblade: false },
          { Fathomless: false },
          { Genie: false },
          { Undead: false },
        ],
        Wizard: [
          { Abjuration: false },
          { Conjuration: false },
          { Divination: false },
          { Enchantment: false },
          { Evocation: false },
          { Illusion: false },
          { Necromancy: false },
          { Transmutation: false },
          { Chronurgy: false },
          { Graviturgy: false },
          { Bladesinging: false },
          { Scribes: false },
          { "War Magic": false },
        ],
      },
    })),

  setBookView: (toggle) =>
    set((state) => ({
      bookView: toggle,
      selectedLevel: -1,
      selectedClass: {
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
      },
      selectedSubClass: {
        Artificer: [
          { Alchemist: false },
          { Armorer: false },
          { Artillerist: false },
          { "Battle Smith": false },
        ],
        Barbarian: [
          { Berserker: false },
          { "Totem Warrior": false },
          { "Ancestral Guardian": false },
          { "Storm Herald": false },
          { Zealot: false },
          { Beast: false },
          { "Wild Magic": false },
          { Battlerager: false },
          { Giant: false },
        ],
        Bard: [
          { Lore: false },
          { Valor: false },
          { Glamour: false },
          { Swords: false },
          { Whispers: false },
          { Creation: false },
          { Spirits: false },
          { Eloquence: false },
        ],
        Cleric: [
          { Arcana: false },
          { Death: false },
          { Forge: false },
          { Grave: false },
          { Knowledge: false },
          { Life: false },
          { Light: false },
          { Nature: false },
          { Order: false },
          { Peace: false },
          { Tempest: false },
          { Trickery: false },
          { Twilight: false },
          { War: false },
        ],
        Druid: [
          { Dreams: false },
          { Land: false },
          { Moon: false },
          { Shepherd: false },
          { Spores: false },
          { Stars: false },
          { Wildfire: false },
        ],
        Fighter: [
          { Champion: false },
          { "Battle Master": false },
          { "Eldritch Knight": false },
          { "Arcane Archer": false },
          { Cavalier: false },
          { Samurai: false },
          { "Psi Warrior": false },
          { "Rune Knight": false },
          { Banneret: false },
          { "Echo Knight": false },
        ],
        Monk: [
          { "Open Hand": false },
          { Shadow: false },
          { "Four Elements": false },
          { "Long Death": false },
          { "Sun Soul": false },
          { Kensei: false },
          { Tranquility: false },
          { "Astral Self": false },
          { Mercy: false },
          { "Ascendant Dragon": false },
          { "Drunken Master": false },
        ],
        Paladin: [
          { Devotion: false },
          { Ancients: false },
          { Vengeance: false },
          { Crown: false },
          { Conquest: false },
          { Redemption: false },
          { Watchers: false },
          { Glory: false },
          { Oathbreaker: false },
        ],
        Ranger: [
          { Hunter: false },
          { "Beast Master": false },
          { "Gloom Stalker": false },
          { "Horizon Walker": false },
          { "Monster Slayer": false },
          { "Fey Wanderer": false },
          { Swarmkeeper: false },
          { Drakewarden: false },
        ],
        Rogue: [
          { Thief: false },
          { Assassin: false },
          { "Arcane Trickster": false },
          { Mastermind: false },
          { Swashbuckler: false },
          { Inquisitive: false },
          { Phantom: false },
          { Soulknife: false },
          { Scout: false },
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
          { Archfey: false },
          { Fiend: false },
          { "Great Old One": false },
          { Undying: false },
          { Celestial: false },
          { Hexblade: false },
          { Fathomless: false },
          { Genie: false },
          { Undead: false },
        ],
        Wizard: [
          { Abjuration: false },
          { Conjuration: false },
          { Divination: false },
          { Enchantment: false },
          { Evocation: false },
          { Illusion: false },
          { Necromancy: false },
          { Transmutation: false },
          { Chronurgy: false },
          { Graviturgy: false },
          { Bladesinging: false },
          { Scribes: false },
          { "War Magic": false },
        ],
      },
    })),

  setSpellList: (spells) =>
    set(() => ({
      spellList: spells,
    })),

    addFavorite: (spell) => set((state) => {
      let spellListFromLocal = JSON.parse(localStorage.getItem('allSpells'))
      const updatedFavorites = [...state.bookSpellList, {...spell, favorited: true}];
      const updatedSpells = spellListFromLocal.map(sp =>
        spell.name === sp.name ? { ...sp, favorited: true } : sp
      );
      localStorage.setItem('favoritedSpells', JSON.stringify(updatedFavorites));
      localStorage.setItem('allSpells', JSON.stringify(updatedSpells));

      //This, and it's mirror in removeFavorite, are taking the new values ("favorite": true) in the case of addFavorite
      //and putting those spells into newState, then returning those. 
      //Reason being if you just return state.spellList, it won't reflect the change to favorite, thus the fav icon will not change
      //And if you instead return updatedSpells, that returns all spells and will nullify the users search input
      //this way the spell fav icon changes and the list of spells the user sees doesn't reset
      //a is convience variable to just search by name and not obj
      const a = state.spellList.map(x => x.name)
      const newState = updatedSpells.filter(x => a.includes(x.name) )

      return { bookSpellList: updatedFavorites, spellList: newState };
    }),

    removeFavorite: (spell) => set((state) => {
      let spellListFromLocal = JSON.parse(localStorage.getItem('allSpells'))
      let favListFromLocal = JSON.parse(localStorage.getItem('favoritedSpells'))
      const updatedFavorites = favListFromLocal.filter(sp => sp.name !== spell.name);
      const updatedSpells = spellListFromLocal.map(sp =>
        spell.name === sp.name ? { ...sp, favorited: false } : sp
      );
      localStorage.setItem('favoritedSpells', JSON.stringify(updatedFavorites));
      localStorage.setItem('allSpells', JSON.stringify(updatedSpells));
      const a = state.spellList.map(x => x.name)
      const newState = updatedSpells.filter(x => a.includes(x.name) )
      return { bookSpellList: updatedFavorites, spellList: newState };
    }),

    setBookSpellList: (spells) => set(() => ({
      bookSpellList: spells,
    })),

  changeLevelSelection: (level) =>
    set(() => ({
      selectedLevel: level,
    })),

  toggleVariant: () =>
    set((state) => ({
      selectedVariant: !state.selectedVariant,
    })),

  toggleClass: (className) =>
    set((state) => ({
      selectedClass: {
        ...state.selectedClass,
        [className]: !state.selectedClass[className],
      },
    })),

  toggleOffSubClasses: (className) =>
    set((state) => {
      const selectedSubClassA = {
        ...state.selectedSubClass,
        [className]: state.selectedSubClass[className].map((subclass) => {
          const key = Object.keys(subclass)[0];
          state.toggledSubClasses = state.toggledSubClasses.filter(
            (x) => x !== key
          );
          return { [key]: false };
        }),
      };

      return {
        selectedSubClass: selectedSubClassA,
      };
    }),

  updateToggledSubClasses: (subClasses) => {
    const toggledSubClasses: string[] = [];
    for (const [className, subclasses] of Object.entries(subClasses)) {
      subclasses.forEach((subclass) => {
        for (const [subclassName, isSelected] of Object.entries(subclass)) {
          if (isSelected) {
            toggledSubClasses.push(subclassName);
          }
        }
      });
    }
    return toggledSubClasses;
  },

  toggleSubClass: (className, subclassName) =>
    set((state) => {
      const updatedSubClass = {
        ...state.selectedSubClass,
        [className]: state.selectedSubClass[className].map((subclass) => {
          if (subclass.hasOwnProperty(subclassName)) {
            return { ...subclass, [subclassName]: !subclass[subclassName] };
          }
          return subclass;
        }),
      };

      const updatedToggledSubClasses = Object.entries(updatedSubClass).flatMap(
        ([_, subclasses]) =>
          subclasses
            .filter((subclass) => Object.values(subclass)[0])
            .map((subclass) => Object.keys(subclass)[0])
      );

      return {
        selectedSubClass: updatedSubClass,
        toggledSubClasses: updatedToggledSubClasses,
      };
    }),
}));

export default useClassStore;
