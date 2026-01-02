import { Component, OnInit, signal } from '@angular/core';
import { Card } from '../../card/card';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { AssetService } from '../../services/asset.service';

@Component({
  selector: 'app-home',
  imports: [Card, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
// export class Home implements OnInit {
//   assets: any[] = [];
//   loading = true;
//   error = '';

//   constructor(private assetService: AssetService, private cdr: ChangeDetectorRef) {}

//   ngOnInit() {
//     this.fetchAssets();
//   }

//   fetchAssets() {
//     this.loading = true;
//     this.assetService.getAssets().subscribe({
//       next: (data) => {
//         this.assets = [...data.assets];
//         this.loading = false;
//         this.cdr.detectChanges();
//       },
//       error: (err) => {
//         this.error = 'Failed to load assets. Please try again later.';
//         console.error('Error fetching assets:', err);
//         this.loading = false;
//         this.cdr.detectChanges();
//       },
//     });
//   }
// }
export class Home {
  assets = signal<any[]>([]);
  loading = signal(true);
  error = signal('');

  constructor(private assetService: AssetService) {
    this.fetchAssets();
  }

  fetchAssets() {
    this.assetService.getAssets().subscribe({
      next: (res) => {
        this.assets.set(res.assets);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load assets');
        this.loading.set(false);
      },
    });
  }
}
