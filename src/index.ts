const test: string = "test";
const foo: string = "une string"; // 'une string' // `une ${ 'string' }`	
const bar: number = 10; //5.5 // -1.2 // 10e2
const boolean: boolean = true // false // 1 ===1;

const obj: object = {
    name: 'jean'
} //new Map() // []

const anything: any = {};
const arr: Array<string> = ['1', '2', '3', '4']; //ddclaration de tableau
const arr2: string[] = ['1', '2', '3', '4'];//declaration de tableau
const tuple: [string, number] = ['1', 2];//tableaux avec un nombre prédéfinis d'élèments


//type enum
enum XhrReadyState {
    UNSENT,
    OPENED,
    HEADERS_RECEIVED,
    LOADING,
    DONE
}

const foo2 : null = null;
const foo3 : undefined = undefined;

function add(nbr1 : number, nbr2 : number) : number {
    return nbr1 + nbr2;
}

function loop() : never {
    while(true) {
        
    }
}

//inférence et assertion de types
// Type inference and type assertion examples

let num = 10; // Type inference: num is inferred as number
let str = "hello"; // Type inference: str is inferred as string

let numStr = num as unknown as string; // Type assertion: converting num to string
let strNum = str as unknown as number; // Type assertion: converting str to number
//
console.log(XhrReadyState.DONE);
console.log(XhrReadyState[0]);
console.log(test);