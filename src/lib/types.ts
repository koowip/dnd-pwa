export enum spellSchools {
  C = 'Conjuration',
  A = 'Abjuration',
  D = 'Divination',
  E = 'Enchantment',
  I = 'Illusion',
  N = 'Necromancy',
  T = 'Transmutation',
  V = 'Evocation'
}

[
  'name',               'sourceFull',
  'source',             'page',
  'srd',                'basicRules',
  'level',              'school',
  'time',               'range',
  'components',         'duration',
  'entries',            'scalingLevelDice',
  'damageInflict',      'savingThrow',
  'miscTags',           'areaTags',
  'availableTo',        'otherSources',
  'entriesHigherLevel', 'meta',
  'conditionInflict',   'affectsCreatureType',
  'damageResist',       'hasFluffImages',
  'spellAttack',        'abilityCheck',
  'conditionImmune',    'damageVulnerable',
  'damageImmune',       'hasFluff',
  'additionalSources'
]   

export interface Spell {
  name: string;
  sourceFull: string;
  source: string;
  page: number;
  srd: boolean;
  basicRules: boolean;
  level: number;
  school: string;
  time: {number: number, unit: string};
  range: {type: string, distance: {type: string, amount: number}},
  components: {[type: string]: boolean },
  duration: {type: string}[],
  entries: string[];
  scalingLevelDice?: {
    label: string,
    scaling: {[level: number]: string}
  }
  damageInflict?: string[];
  savingThrow?: string[];
  miscTags: any;
  areaTags: any;
  availableTo: any;
  otherSources: any;
  entriesHigherLevel: any;
  meta: any;
  conditionInflict: any;
  affectsCreatureType: any;
  damageResist: any;
  hasFluffImages: any;
  spellAttack: any;
  abilityCheck: any;
  conditionImmune: any;
  damageVulnerable: any;
  damageImmune: any;
  hasFluff: any;
  additionalSources: any;
}