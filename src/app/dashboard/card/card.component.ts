import { style } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor() { }

  ngOnInit() {
  }

  onLike(card: any){
    this.card.likes++
  }

  onShare(card: any){
    const link = 'https://www.linkedin.com/in/emersonslima/';
    window.open(link, '_blank');
  }

}
