import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Model } from '../model';
// import { TodoItem } from '../todoitem';  == model ts sayfasında interfase erişim sağlayıp liste oluşturuldugu için artık burda todoitem'a erişime gerek yok.

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {

   message : string = "merhaba";

  displayAll : boolean = false;
  inputText: string ="";
  
  constructor() { }

  /* [1]
  // private name = "Talha"; //değişkeni burada oluşturuyoruz {{name}} şeklinde bu değişken çağrılabilir html sayfasından.
  // items = [
  //   "item 1","item 2","item 3","item 4"
  // ];
  */

  /* [2]
  items = [
    {id: 1, description: "Breakfast", action: "yes"},
    {id: 2, description: "Sport", action: "yes"},
    {id: 3, description: "Shopping", action: "no"}
  ]; */

  /* [3]
  items: any[]= [ // tip tanımlaması yapıyorum : normaldede any[] == bende belirtiyorum sadece.
    {id: 1, description: "Breakfast", action: "yes"},
    {id: 2, description: "Sport", action: "yes"},
    {id: 3, description: "Shopping", action: "no"}
  ]; */


  /* [4] = model.ts sayfasından bütün verilere erişimi sağladığımız için buraya gerek yok artık. == bu sayede tüm componentlerden bu verilere erişimi sağladık.
  private name: string = "Talha"; // tip tanımlaması yapıyorum zorunluy değil ama hatalı girişi önlemek adına önlem
  // class veya interfa ile obje type belirleme . == todoitem.ts içinde objeleri tanımlıyorum. burayada TodoItem[] yazdığımda : otomatik üste sayfa exportunu yapıyor.
  items: TodoItem[]= [ //Toduitem ile type belirtme sebebimiz : içinde tanımladığımız oblerin type larını belirtip veri girişi sırasında istemeden de olsa hata lı tür girip proğramın çalışması ve ya çalıştıktan sonra sayfadaki çıkabilecek sorunların önüne geçmek.
  { description: "Breakfast", action: "yes"}, //burda interface ile nesnelerin türü verildi.
  { description: "Sport", action: "yes"},
  { description: "Shopping", action: "no"}
  // new TodoItem("Breakfast","yes"), // clasda objenin türünü belirleyip burda constracter ile nesne oluşturulmasını gerçekleştirdik
  // new TodoItem("Sport","yes"),
  // new TodoItem("Shopping","no"),
  // new TodoItem("Runing","yes"),
  ];
  */
 
  model = new Model(); //her new model dediğiöde yeni bi kopya oluşturulacak. farklı komponentler için lazım bilgi(ve genel kültür). servis mantıgı varmış 1 kere oluşturunca cobtracterdan new diye onu kullanabiliyormusuz farklı syflarda böylece dışarıdan listeye ekleme yaptıgımda mesela bütün sayfalarda aynı değişikliği görebilleceğim.

  /* //inputun tamamı geliyor biz içinden valuesini alıyoruz.
  addItem(txtItem: any){
    console.log(txtItem.value);
  }
  */

  /* konsolo sayfadan gelen verinin basımı ve todo.component.ts de tanımlanıp sayfada görüntülenen değişkenin güncellenmesi
  addItem(value: string){
    this.message = value; //sayfaya verilen değişkeni değiştiriyorum  ve direk sayfada uygulanıyor kendisi.(benim getElementçById.value = message dememe gerek kalmıyor her seferinde)
    console.log(value);
  }
  */
  /* gelen veriyi items listesine yeni veri olarak eklemeekleme */
  /*
  addItem(value: string){ 
    if(value !=''){
      this.model.items.push({ description: value, action: false}); //sayfaya verilen değişkeni değiştiriyorum  ve direk sayfada uygulanıyor kendisi.(benim getElementçById.value = message dememe gerek kalmıyor her seferinde)
    }
    else{
      alert("bilgi giriniz");
    }
  }
  */

  addItem(){  // inputtaki veriyi ts içindeki değişken ile binding yaotığımızdan artık htmll sayfasından veriyi çekmemize gerek yok.
    if(this.inputText !=''){ 
      this.model.items.push({ description: this.inputText, action: false}); //sayfaya verilen değişkeni değiştiriyorum  ve direk sayfada uygulanıyor kendisi.(benim getElementçById.value = message dememe gerek kalmıyor her seferinde)
      this.inputText ='';
    }
    else{
      alert("bilgi giriniz");
    }
  }

  getName(){ // class dan name  çekmek için.
    return this.model.name;
  }
  
  getItems(){ //Listeki itemleri çekmek için
    if(this.displayAll){ //checkbox seçiliyse tüm itemleri göstyer(true ise)
      return this.model.items;
    }
     /*return this.model.items.filter(item => item.action == 'no'); // checkbox seçili değilse (action'u no olan verileri göster sadece) = action 'no' , 'yes' iken */
     return this.model.items.filter(item => !item.action); // checkbox seçili değilse (action'u no olan verileri göster sadece) 
  }

  displayCount(){
    return this.model.items.filter(i => i.action).length; // tamamlanan elemanların sayısını alıyoruz.
  }
  // method çagırmak yerine bunları html sayfasındada yaabilirz [class] = içine  
  getBtnClasses(){ 
      return { 
      'disabled': this.inputText.length==0,
      'btn-secondary': this.inputText.length==0,
      'btn-primary': this.inputText.length>0 
    }
  }
}

