import {Spacecraft, Containership} from './base-ship'

export class MillenniumFalcon extends Spacecraft implements Containership{
    
    cargoContainers: number
    constructor(){
        super('hyperdrive')
        this.cargoContainers = 4;
    }
    
    jumpToHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpToHyperspace()
        } else {
            console.log("Falha ao tentar entrar para o hyper espaço")
        }
    }
}