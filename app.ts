class Spacecraft{

    constructor (public propulsor: string){}

    jumpToHyperspace(){
        console.log(`Entrando no hyper espaço com ${this.propulsor}`)
    }
}
let ship = new Spacecraft('hyperdrive');
ship.jumpToHyperspace();

class MillenniumFalcon extends Spacecraft implements Containership{
    
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

let falcon = new MillenniumFalcon();
falcon.jumpToHyperspace();

interface Containership{
    cargoContainers: number
}

let goodForThejob = (ship : Containership) => ship.cargoContainers > 2;
console.log(`A MillenniumFalcon é boa para o trabalho? ${goodForThejob(falcon) ? "Sim" : "Não"}`)