import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Jojhan Perez';
  age = 20;
  img =
    'https://cdn.alfabetajuega.com/alfabetajuega/2022/09/Imagen_General-copia.1663136411.4337.jpg';
  btnDisable = true;
  person = {
    name: 'Jojhan',
    lastName: 'Perez',
    age: 20,
    avatar:
      'https://cdn.alfabetajuega.com/alfabetajuega/2022/09/Imagen_General-copia.1663136411.4337.jpg',
  };

  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  names = ['Jojhan', 'Sebastian', 'Jacobo', 'Steven'];
  newName = ' ';

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(i: number) {
    this.names.splice(i, 1);
  }

  products: Product[] = [
    {
      name: 'FIFA 23',
      price: 250000,
      image: './assets/images/Fifa23.jpg',
    },
    {
      name: 'Grand Theft Auto V',
      price: 150000,
      image: './assets/images/GTA.jpg',
    },
    {
      name: 'Assassin Cred Valhalla',
      price: 230000,
      image: './assets/images/Assassins.jpg',
    },
    {
      name: 'Red Dead Redention',
      price: 200000,
      image: './assets/images/RedDead.jpg',
    },
  ];

  widthImg = 10;

  box = {
    width: 100,
    heigth: 100,
    background: 'red',
  };

  register = {
    name: '',
    email: '',
    password: '',
  };

  oneRegister() {
    console.log(this.register);
  }
}
