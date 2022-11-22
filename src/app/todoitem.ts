/*
export class TodoItem{
    description: string;  //hata alamamak için tsconfig.json içinde = strictNullChecks":false olması gerekiyor.
    action: string;

    / * = derleme sırasında hata almamak için
    // == tsconfig.json içinde "strictNullChecks":true yaparsam veya hiç vermezsem normalde yok bu yapıyı kullanmam gerekir hata almamak için == başlangıçda constracterda bi atama yapmayı bekliyor tanımlanan object type için ama biz false atıyorak constracter tanımlaması yapnadan objere propert verebiliriz.
    constructor(description: string, action: string){
        this.description = description;
        this.action  = action;
    }
    //  * / alttaki kapatmada hata alınamamsı için böyle yaptım 
}
*/

/*
export class TodoItem{ // yukarıdaki gibi property vermeden constructor içindede bu şekilde yapabiliriz = sadece public privete tanımlaması yapmamız gerekiyor.
    constructor(public description: string, public action: string){ //private dersem = erişimde hata alabilirim.
        this.description= description;
        this.action = action;
    }
}
*/

/* constroctor ı bu şekilde tanımlayabilirim : ve public olanlara bu şekilde erişim sağlayabilirim.
const td = new TodoItem("spor","yes");
td.action;
*/

// interfa yapısında olmayan obje ismi bu interface ile oluşturulan dizi veya başka yapılar'da kullanılamaz.  == mesela id diye bi alan yok gidipde tanımala içinde id:5 gibi belirtilemez hata verir.
export interface TodoItem{ // class yapısndaki gibi constrocter oluşturmamıza gerek yok : public , private diye belirtmemizede gerek yok: bu seşilde direk türünü verebiliriz.
    description: string;   
    action: string;
}