import { Component } from '@angular/core';

@Component({
  selector: 'app-error404page',
  templateUrl: './error404page.component.html',
  styles: [
    ` body {
      margin: 0;
      padding: 0;
      background-color: #2945c2;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: 'Roboto', sans-serif;
    }

    .container {
      text-align: center;
    }

    h1 {
      font-size: 4em;
      color: #f5f0f0;
    }

    p {
      font-size: 1.2em;
      color: #f7f3f3;
    }

    a {
      text-decoration: none;
      color: #19191d;
      font-weight: bold;
    }

    a:hover {
      text-decoration: underline;
    }`
  ]
})
export class Error404pageComponent {

}
