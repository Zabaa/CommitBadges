import { Container } from "inversify";
import { TYPES } from "./containerTypes";
import { Warrior, Weapon, ThrowableWeapon } from "../badges/bugs/Interfaces";
import { Ninja, Katana, Shuriken } from "../badges/bugs/WarriorsTypes";

var container = new Container();
container.bind<Warrior>(TYPES.Warrior).to(Ninja);
container.bind<Weapon>(TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export default container;