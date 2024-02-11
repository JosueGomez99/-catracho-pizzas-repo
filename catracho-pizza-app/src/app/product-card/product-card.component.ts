import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonCard,IonImg,IonCardHeader,IonCardTitle,IonCardContent,IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone:true,
  imports:[IonCard,IonImg,IonCardHeader,IonCardTitle,IonCardContent,IonButton]
})
export class ProductCardComponent {
  product = {
    image: 'https://www.hondurasensociedad.hn/wp-content/uploads/2023/09/pizza4.jpg',
    title: 'Big New Yorker Bacon & Banana Peppers',
    description: 'Una pizza de gran tamaño, inspirada al estilo New York con rebanadas grandes, de pepperoni y trocitos de bacon, con abundante rebanadas de chile banana peppers de sabor suave con toque ácido, con una mezcla de orégano y queso parmesano sobre los ingredientes y mantequilla de ajo a la orilla.'
  };
  quantity = 1;

  constructor(private alertController: AlertController) {}

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  async orderProduct() {
    const total = 329.00 * this.quantity;
    const alert = await this.alertController.create({
      header: 'Orden confirmada',
      message: `Ha agregado correctamente el producto a su carrito. Total de la compra:  LPS. ${total.toFixed(2)}`,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}