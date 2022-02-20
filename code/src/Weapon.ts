import {Item} from "./Item";


export abstract class Weapon extends Item {
  MODIFIER_CHANGE_RATE:number = 0.05;
  baseDamage: number;
  damageModifier: number;
  baseDurability: number;
  durabilityModifier: number;

  protected constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    // this.damageModifier = damageModifier;
    this.baseDurability = baseDurability;
    // this.durabilityModifier = durabilityModifier;
  }

  getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  toString(): string {
    return `${this.name} − Value: ${this.value}, Weight : ${this.weight} , Damage : ${this.baseDamage} , Durability : ${this.durabilityModifier}%`;
  }

  use(): string {
    this.baseDamage =- this.MODIFIER_CHANGE_RATE;
    const effectiveDurability = this.getDurability();
    if(effectiveDurability <= 0) {
      return `You can't use the ${this.name} , it is broken.`;
    }

    return `You use the ${this.name} , dealing ${this.baseDamage} points of damage.\nThe hammer breaks.`;
  }
}