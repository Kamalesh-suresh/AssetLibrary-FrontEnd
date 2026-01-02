import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card',
  imports: [CardModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title!: string;
  @Input() description!: string;
  @Input() mac!: string;
  @Input() link!: string;

  openLink() {
    if (!this.link) return;

    window.open(this.link, '_blank', 'noopener,noreferrer');
  }
}
