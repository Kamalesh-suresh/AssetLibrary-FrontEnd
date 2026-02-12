import { Component, signal } from '@angular/core';
import { Card } from '../../card/card';
import { CommonModule } from '@angular/common';
import { AssetService } from '../../services/asset.service';
import { AssetStateService } from '../../services/state/assetState.service';

@Component({
  selector: 'app-home',
  imports: [Card, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  assets = signal<any[]>([]);
  loading = signal(true);
  error = signal('');

  constructor(private assetService: AssetService, private assetState: AssetStateService) {
    this.fetchAssets();
  }

  fetchAssets() {
    this.assetService.getAssets().subscribe({
      next: (res) => {
        this.assets.set(res.assets);
        this.assetState.setCount(res.count);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load assets');
        this.loading.set(false);
      },
    });
  }
}
