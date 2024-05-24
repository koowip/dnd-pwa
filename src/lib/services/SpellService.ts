import { Spell } from "../types";

//Load spellList from local storage
//Remember to JSON.parse 


//Main function that takes a filtered list of spell names and returns a list of spells to be rendered by SpellAccordion
export function List(name: string, inBook: boolean): any {

  let spellList;
  inBook ?  spellList = localStorage.getItem('favoritedSpells') : spellList = localStorage.getItem('allSpells')

  return JSON.parse(spellList).filter((x) =>
    x.name.toLowerCase().includes(name.toLowerCase())
  );
}

//Return not only class spells but subclass spells
//If fighter filter selected and search for acid, acid splash and melf's appear.
export function FilterClassNonOpinionated(
  specifiedClasses: {},
  curSpell: Spell
): any {
  //const isAnyClassSelected = Object.values(specifiedClasses).some((value) => value);
  const selectedClasses = Object.keys(specifiedClasses).filter(
    (key) => specifiedClasses[key]
  );

  if (selectedClasses.length !== 0) {
    return selectedClasses.some((selectedClasses) =>
      Object.keys(curSpell.availableTo).includes(selectedClasses)
    );
  } else return true;
}

//Returns only base class spells, subclass spells are not included
//If fighter filter selected and search for acid, no spells appear.
export function FilterClass(specifiedClasses: {}, curSpell: Spell): any {
  const selectedClasses = Object.keys(specifiedClasses).filter(
    (key) => specifiedClasses[key]
  );

  if (selectedClasses.length !== 0) {
    return selectedClasses.some((selectedClasses) =>
      Object.keys(curSpell.availableTo)
        .filter((x) => curSpell.availableTo[x].length === 0)
        .includes(selectedClasses)
    );
  } else return true;
}

//This works in a super janky way and probably needs to be redone hoenstly
//Reference the code in Search.tsx => handleChange for unfucking this
export function FilterSubclass(specifiedSubclasses: any[], curSpell: Spell): any {
   
  let a = Object.values(curSpell.availableTo).filter(subclasses => subclasses.length > 0).flat()
   //console.log("Spell subclasses" , a);
  // console.log("Selected Subclasses", specifiedSubclasses)

  if(specifiedSubclasses.length > 0) {
    return specifiedSubclasses.some(element => a.includes(element)) 
  } else
    return true;
}

export function FilterLevel(specifiedLevel: number, curSpell: Spell): any {
  if (specifiedLevel > -1) 
    return curSpell.level === specifiedLevel;
  else 
    return true;
}

//Not currently being used as no one is using variant feat. Will correct and use filter at later date.
//Issue
//Returns if any class has spell as variant.
//If variant: yes & Bard: true, Symbol spell gets returned, this is not a bard variant spell but a druid one
//Returns cause available to all bards && is a variant spell to a class.
//Write logic to check if a class is true, then only return if that class is "variant"
export function FilterVariant(variant: boolean, curSpell: Spell): any {
  if (variant) {
    return Object.values(curSpell.availableTo).flat().includes("variant");
  } else return true;
}
