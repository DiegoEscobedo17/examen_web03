import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  @Input() valor: number=1;
  constructor() { }

  ngOnInit() {
    alert(this.valor);
  }

 

}
