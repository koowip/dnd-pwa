import SpellsList from "../../AllSpells.json";
import { Spell } from "../types";

/* Filter criteria
  By base class //Done
  By subclass
  By spell level
  By variant
*/


//Main function that takes a filtered list of spell names and returns a list of spells to be rendered by SpellAccordion
export function List(name: string): any {
  return SpellsList.filter((x) =>
    x.name.toLowerCase().includes(name.toLowerCase())
  );
}


//Return not only class spells but subclass spells
//If fighter filter selected and search for acid, acid splash and melf's appear.
export function FilterClassNonOpinionated(specifiedClasses: {}, curSpell: Spell): any {

  //const isAnyClassSelected = Object.values(specifiedClasses).some((value) => value);
  const selectedClasses = Object.keys(specifiedClasses).filter((key) => specifiedClasses[key]);

  if (selectedClasses.length !== 0) {
    return selectedClasses.some((selectedClasses) => Object.keys(curSpell.availableTo).includes(selectedClasses));
  }
  else 
    return true;
}


//Returns only base class spells, subclass spells are not included
//If fighter filter selected and search for acid, no spells appear.
export function FilterClass(specifiedClasses: {}, curSpell: Spell): any {

  const selectedClasses = Object.keys(specifiedClasses).filter((key) => specifiedClasses[key]);
  
  if (selectedClasses.length !== 0) {
    return selectedClasses.some((selectedClasses) => Object.keys(curSpell.availableTo).filter((x) => curSpell.availableTo[x].length === 0).includes(selectedClasses));
  } else
    return true;
}


export function FilterSubclass(specifiedSubclasses: {}, curSpell: Spell): any {

  const subclasses = Object.keys(specifiedSubclasses).filter((key) => specifiedSubclasses[key]);
  console.log(subclasses)
  
  //return Object.values(curSpell.availableTo).flat().includes("variant")
  return true;
}


export function FilterLevel(specifiedLevel: number, curSpell: Spell): any {

  if(specifiedLevel > (-1) )
    return curSpell.level === specifiedLevel;
  else
    return true;
}


export function FilterVariant(variant: boolean, curSpell: Spell): any {
  if(variant) {
    return Object.values(curSpell.availableTo).flat().includes("variant");
  } else
    return true;
}
