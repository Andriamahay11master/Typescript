//declaration base function in typescript
function add(nbr1 : number, nbr2 : number) : number {
    return nbr1 + nbr2;
}

let add2 = (...number: Array<number>) => {
    return number.reduce((total, nbr) => total + nbr, 0);
}

//surcharge de fonction 
function addMulti(a: number, b: number) : number;
function addMulti(a: string, b: string) : string;
function addMulti(a, b) : number | string {
    return a+b;
}

console.log(add2(10,20,5,30));
console.log(addMulti(10,20));
console.log(addMulti("Hello", "World"));