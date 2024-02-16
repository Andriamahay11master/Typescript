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


//
console.log(XhrReadyState.DONE);
console.log(XhrReadyState[0]);
console.log(test);