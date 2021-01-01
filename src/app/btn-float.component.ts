import { Component } from '@angular/core';

@Component({
  selector: 'btn-float',
  template: `
    <div class="btn-float">
        <label class="btn-float-text" text="+"></label>
    </div>
  `,
  styles:[`
    .btn-float{
        background-color:red;
        width: 50px;
        heigth: 50px;
        text-align:center;
        vertical-align:middle;
        border-radius: 50%;
    }
    .btn-float-text{
        color: black;
        font-size: 28;
    }
  `]
})
export class btnfloatComponent {

}
