import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/auth/interfaces/users.interfaces';

@Component({
  selector: 'users-user-card',
  templateUrl: './card.component.html',
  styles: [
    `
      .user-card {
        width: 300px; /* Ajusta el ancho de la tarjeta según sea necesario */
        margin-bottom: 20px; /* Espacio entre tarjetas */
      }

      .image-container {
        height: 200px; /* Ajusta la altura de la imagen según sea necesario */
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .image-container img {
        max-width: 100%;
        max-height: 100%;
      }

      .mat-card-actions {
        display: flex;
        justify-content: flex-end;
      }

      .spacer {
        flex-grow: 1;
      }`
  ]
})
export class CardComponent implements OnInit {


  @Input()
  public user!: User;

  ngOnInit(): void {
    if (!this.user) throw Error('User property  is requiered');
  }

}
