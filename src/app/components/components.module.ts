import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {UpdatesComponent} from "./updates/updates.component";
import {CanStatusComponent} from "./can-status/can-status.component";
import {OnStatusComponent} from "./on-status/on-status.component";
import {DataService} from "../data.service";



@NgModule({
  declarations: [UpdatesComponent,CanStatusComponent,OnStatusComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports:[UpdatesComponent,CanStatusComponent,OnStatusComponent],
  providers: [DataService]
})
export class ComponentsModule { }
