import SpellsList from '../../AllSpells.json'
import { Spell } from '../types'

// interface ISpellService {
//   List: (name: string) => Spell[];
// }

export function List(name: string): any {

  // spell name formatting need more attention
  let x = SpellsList.filter(x => x.name.toLowerCase().includes(name.toLowerCase()));
  console.log(x);
  return SpellsList.filter(x => x.name.toLowerCase().includes(name.toLowerCase()));

}

//Return not only class spells but subclass only spells
export function FilterClassNonOpinionated(specifiedClass: string, curSpell: Spell): any {

  return Object.keys(curSpell.availableTo).includes(specifiedClass);
  
}

export function FilterClass(specifiedClass: string, curSpell: Spell): any {

  return Object.keys(curSpell.availableTo).filter(x => curSpell.availableTo[x].length === 0).includes(specifiedClass);
  
}