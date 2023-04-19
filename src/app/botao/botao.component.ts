import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-botao',
    templateUrl: './botao.component.html'

})

export class BotaoComponent{
    @Output()
    clickBotao=new EventEmitter
    
    botaoClick():void{
        console.log("botaocomponent----botaoClik")
        this.clickBotao.emit()
    }

}