import {Weapon} from "./Weapon";

export class Bow extends Weapon {

  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super("bow", baseDamage, baseDurability, value, weight);
  }

  polish() {
    this.durabilityModifier += this.MODIFIER_CHANGE_RATE;
  }
}