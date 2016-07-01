
import { Profession } from '../base/profession';

export class Mage extends Profession {

  static baseHpPerLevel = Profession.baseHpPerLevel - 25;
  static baseMpPerLevel = Profession.baseMpPerLevel + 25;

  static baseMpPerInt = 5;

  static baseConPerLevel = 2;
  static baseDexPerLevel = 2;
  static baseAgiPerLevel = 2;
  static baseStrPerLevel = 2;
  static baseIntPerLevel = 6;
}