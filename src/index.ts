abstract class Engine{
    constructor(protected type: string){
    }

    abstract stopEngine() : number
}

class Vehicule extends Engine{
    wheel = 4;
    protected brand : string;
    constructor(brand){
        super('v8');
        this.brand = brand;
    }

    stopEngine() {
        console.log("Je stoppe");
        return 2;
    }
}

class Voiture extends Vehicule{
    public speed : number;
    private maxSpeed: number = 100;
    readonly airbag : boolean = true;
    static className : string = "Voiture";
    move (){
        console.log("Je roule");
    }

    static startCar(){
        console.log("Je commence");
    }

    faster(newspeed : number){
        if(newspeed < this.maxSpeed){
            this.speed = newspeed
        }
    }

    changeBrand(newBrand : string) : void{
        this.brand = newBrand
    }
    stop(){
        console.log("Je stoppe");
    }
    constructor(brand){
        super(brand);
        this.speed = 0;
    }
}

const car = new Voiture("Audi");

console.log(car.speed);
console.log(car.wheel);
car.faster(50);
console.log(car.speed);
car.stop();
car.changeBrand("Renault");
console.log(car);

const caraV = new Vehicule("Renaudl");
console.log(caraV);

