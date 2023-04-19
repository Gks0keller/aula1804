import { CommonModule } from "@angular/common";
import { NgModule, Output } from "@angular/core";
import { BotaoComponent } from "./botao.component";

@NgModule({
    imports: [
        CommonModule
    ],
    exports:[
        BotaoComponent
    ],
    declarations: [
        Output,
        BotaoComponent
    ]

})

export class BotaoModule{}