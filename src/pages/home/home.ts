import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // menuOpc: Menu[] = [
    
  //       { label: 'Inicio', icon: 'home' },
  //       { label: 'Bebidas', icon: 'md-beer' },
  //       { label: 'Pizza', icon: 'md-pizza' },
  //       { label: 'Comida', icon: 'md-restaurant' },
  //       { label: 'Cafes', icon: 'md-pint' },
  //       { label: 'Bar', icon: 'md-wine' }
    
  //     ]

  constructor(public navCtrl: NavController) {

  }

}
