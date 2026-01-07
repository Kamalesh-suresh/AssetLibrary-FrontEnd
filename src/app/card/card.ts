import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { AuthService } from '../services/auth.service';
import { AssetService } from '../services/asset.service';

@Component({
  selector: 'app-card',
  imports: [CardModule, ButtonModule, TooltipModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title!: string;
  @Input() description!: string;
  @Input() mac!: string;
  @Input() link!: string;
  @Input() id!: number;
  @Output() deleted = new EventEmitter<void>();

  validUser: boolean = false;

  constructor(
    private authService: AuthService,
    private assetService: AssetService,
    private router: Router
  ) {
    this.validUser = this.authService.isLoggedIn();
    console.log('Valid User:', this.validUser);
  }

  openLink() {
    if (!this.link) return;

    window.open(this.link, '_blank', 'noopener,noreferrer');
  }

  deleteAsset($event: MouseEvent) {
    $event.stopPropagation();
    console.log('Delete asset with ID:', this.id);

    this.assetService.deleteAsset(this.id.toString()).subscribe({
      next: () => {
        alert('Asset deleted successfully');
        this.deleted.emit();
        // Optionally, you can add logic here to refresh the asset list in the parent component
      },
      error: (err) => {
        console.error('Deletion failed', err);
      },
    });
  }

  editAsset($event: MouseEvent) {
    $event.stopPropagation();
    this.router.navigate(['/editAsset', this.id]);
  }
}
