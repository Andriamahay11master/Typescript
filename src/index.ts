//union de type
let test : string | number; 

function ajouter(a: string | number, b: string | number) {
    return Number(a) + Number(b);
  }

const ret = ajouter(10, "10")
console.log(ret);

//union d'interface
interface User {
    name: string;
    email: string;
  }
  
  interface Moderator extends User {
    role: 'moderator';
    editMessage: (msg: string) => string
  }
  
  let user: User | Moderator | null;
  user.email = "test@gmail.com";