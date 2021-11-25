class Spacecraft {

    constructor(public propulsor: string) { }

    jumpToHyperspace() {
        console.log(`Entrando no hyper espaço com ${this.propulsor}`)
    }
}

interface Containership {
    cargoContainers: number
}
//torna a classe e interface em modulos e os exporta
export{Spacecraft, Containership}