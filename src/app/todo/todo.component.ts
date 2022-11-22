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

  message = "";
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
  addItem(value: string){
    if(value !=''){
      this.model.items.push({ description: value, action: "no"}); //sayfaya verilen değişkeni değiştiriyorum  ve direk sayfada uygulanıyor kendisi.(benim getElementçById.value = message dememe gerek kalmıyor her seferinde)
    }
    else{
      alert("bilgi giriniz");
    }
    
  }

  getName(){
    return this.model.name;
  }
  
  getItems(){
    return this.model.items;
  }
}

