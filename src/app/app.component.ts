import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appBotaoClick():void{
    console.log("appcomponent---botaoComponet")
  }
  mouseOverBotao():void{
    console.log("MouseOver appComponent")
  }
}
