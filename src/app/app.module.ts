import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    BrowserModule, //tarayıcı üzerinde çalışması için gerekli modül = kendisi geliyor zaten
    FormsModule  // ngModel'ı kullanabilmemiz için gerekli module : bizim eklememiz gerekiyor.
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }
