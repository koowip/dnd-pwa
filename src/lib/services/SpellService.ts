import SpellsList from '../../AllSpells.json'
import { Spell } from '../types'

// interface ISpellService {
//   List: (name: string) => Spell[];
// }

export function List(name: string): any {

  return SpellsList.filter(x => x.name.toLowerCase().includes(name.toLowerCase()));

}

//Return not only class spells but subclass only spells
//If fighter filter selected and search for acid, acid splash and melf's appear.
export function FilterClassNonOpinionated(specifiedClasses: {}, curSpell: Spell): any {
  //return Object.keys(curSpell.availableTo).includes(selectedClasses); //OG code

  const selectedClasses = Object.keys(specifiedClasses).filter(key => specifiedClasses[key]);
  return selectedClasses.some(selectedClasses => Object.keys(curSpell.availableTo).includes(selectedClasses));
  
}

//Returns only base class spells, subclass spells are not included
//If fighter filter selected and search for acid, no spells appear.
export function FilterClass(specifiedClasses: {}, curSpell: Spell): any {
  //return Object.keys(curSpell.availableTo).filter(x => curSpell.availableTo[x].length === 0).includes(specifiedClass); //OG code

  const selectedClasses = Object.keys(specifiedClasses).filter(key => specifiedClasses[key]);
  return selectedClasses.some(selectedClasses => Object.keys(curSpell.availableTo).filter(x => curSpell.availableTo[x].length === 0).includes(selectedClasses))
  
}