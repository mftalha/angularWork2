import { TodoItem } from "./todoitem";

//verilere bütün componentlerden erişmek için class obje tanımı ve içine başlangıç değeri verme ile çözüm üretiyoruz.
export class Model{
    name: string;   // clas içinde obje tanımladığımıdan bizden başlangıç değeri istiyor. bunun yerine tsconfig.json içine "strictNullChecks":false  yapabiliriz. = constroctor istemez bizden hatasız kabul eder bu yapıyı direk.
    items: TodoItem[]; 

    constructor(){
        this.name = "Talha";
        this.items = [
            { description: "Breakfast", action: "yes"}, //burda interface ile nesnelerin türü verildi.
            { description: "Sport", action: "yes"},
            { description: "Shopping", action: "no"},
            { description: "Shopping", action: "no"},
            { description: "Shopping", action: "no"}
        ];
    }
}