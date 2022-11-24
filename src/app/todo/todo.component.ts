import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Model } from '../model';
import { TodoItem } from '../todoitem';
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
  
  constructor() { 
    this.model.items = this.getItemsFromLS(); // local strogede veri varsa uygulama başlarken model'in items ine set edilsin.
  }

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
      //this.model.items.push({ description: this.inputText, action: false}); //sayfaya verilen değişkeni değiştiriyorum  ve direk sayfada uygulanıyor kendisi.(benim getElementçById.value = message dememe gerek kalmıyor her seferinde)
      let data = { description: this.inputText, action: false};
      this.model.items.push(data); 

      //let items = []; // local stroge içine gelen verilerin hepsini görmek için listeyi atacaz local stroge ye
      let items = this.getItemsFromLS(); //local stroge deki verileri çekiyorum önce. yeni veri geldiğinde : çünkü set ile attığımda önceki veriler siliniyor local strogedeki : o yüzden ordaki verileri çekip yeni veri ile birleştirip bidaha atıyorum. Todo liste şeklinde.
      items.push(data);

      localStorage.setItem("items",JSON.stringify(items)); //tarayıcıda : incele de applicationa geliyoruz sol tarafta Local Stroge var onun içinde tarayıcı ip mize tıklayınca erişebiliriz burdan set ile verdigimiz verilere.
      this.inputText ='';
    }
    else{
      alert("bilgi giriniz");
    }
  }

  getItemsFromLS(){ //Local strogedeki veriyi çekme 
    let items: TodoItem[] = [];
    let value = localStorage.getItem("items"); // local strogedeki veriyi çekiyoruz.
    
    if(value != null) {
      items = JSON.parse(value); // local strogedeki veri strşing json tipinde oldugundan ayrıştırıyruz önce üzerinde işlem yapabilmek için.
    }
    return items;
  }

  onActionChange(item: TodoItem){ //checkbox seçildiğinde gir : 
    let items = this.getItemsFromLS(); // local strogedeki veriyi çekiyorum

    items.forEach(i =>{ 
      if(i.description == item.description){ // local stroge içindeki verilerden descriptionu check boxda seçilen desc aynı olan veriyse ife gir
        i.action = item.action; // aitems listesindeki ilgili verinin actionu güncelle
      }
    });
    localStorage.setItem("items",JSON.stringify(items)); // güncellenen veriyle beraber listeyi local stroge ye at
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

