import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BotaoComponent } from './botao/botao.component';
import { BotaoModule } from './botao/botao.modules';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
