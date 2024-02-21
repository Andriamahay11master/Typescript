

interface User{
    username: string,
    isDrinking: boolean,
    isHealthy?: boolean,
    isSmooking?: boolean,
    age: number
    [propName: string]: any; //index
}

const user : User = {
    username: 'John',
    isDrinking: true,
    isHealthy: true,
    isSmooking: true,
    age: 20,
    hairColor: 'black'
}
function greet(user: User) : void{
    console.log(`Hello ${user.username}`)	
}

function death(user: User) : void{
    
}

function goodShape(user: User) : void{
    
} 
greet(user)

const tableNotEditing: readonly string[] = ['a', 'b', 'c'];
const tabNotEditing : ReadonlyArray<string> = ['a', 'b', 'c'];

interface MyFunc{
    (a: string, b: number): number
}

const func2 : MyFunc = (a: string, b: number) => a.length


//composition d'interfaces
interface Vehicule{
    name: string,
    drive : () => void
}

interface Engine{
    type: string,
}
/*interface Car extends Vehicule, Engine{
    wheels: number
}*/

class Car implements Vehicule, Engine{
    drive: () => void;
    constructor(public name: string, public wheels: number, public type: string){
        this.drive = () => {}
    }

}

