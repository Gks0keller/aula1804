import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BotaoComponent } from './botao/botao.component';
import { BotaoModule } from './botao/botao.modules';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
