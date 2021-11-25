//importa as classes para serem usadas externamente
import{Spacecraft, Containership} from './base-ship'
import{MillenniumFalcon} from './starfigther'

//importando lodash
import * as _ from 'lodash'
console.log(_.pad(" Typescript Exemples ", 40 , "*"))

let ship = new Spacecraft('hyperdrive');
ship.jumpToHyperspace();

let falcon = new MillenniumFalcon();
falcon.jumpToHyperspace();

let goodForThejob = (ship : Containership) => ship.cargoContainers > 2;
console.log(`A MillenniumFalcon é boa para o trabalho? ${goodForThejob(falcon) ? "Sim" : "Não"}`)