
import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'app-body',
  templateUrl: 'body.component.html',
})
export class BodyComponent {

  visible: boolean = true;
  /*
*ngIf="visible" cuando es falso destruye el objet por completo
  */
  texto: string ="Un gran poder requiere una gran responsabilidad.";
  texto2: string = "Primer proyecto Angular Spartdark";

  personajes: string[] = ["Spiderman","Venom","Doc. Octopus"]
  //ngFor
}
