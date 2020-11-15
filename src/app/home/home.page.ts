import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private flashlight: Flashlight) {}
    encenderLintera(event){
    let power: boolean;
    power=event.target.checked;

    if(power){
      //console.log('encendido');
      this.flashlight.switchOn();
    }else{
      //console.log('apagar');
      this.flashlight.switchOff();
    }
  }
}
