import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-botao',
    templateUrl: './botao.component.html'

})

export class BotaoComponent{
    @Output()
    clickBotao=new EventEmitter()
    
@Output()
mouseOverBotao=new EventEmitter()

@Input()
conteudo:String;

    mouseOver(){
        console.log("mouseOver botaocomponent")
        this.mouseOverBotao.emit()
    }

    botaoClick():void{
        console.log("botaocomponent----botaoClik")
        this.clickBotao.emit()
    }

}