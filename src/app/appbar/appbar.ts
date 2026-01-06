import { Component, inject } from '@angular/core';
import { AssetStateService } from '../services/state/assetState.service';

@Component({
  selector: 'app-appbar',
  imports: [],
  templateUrl: './appbar.html',
  styleUrl: './appbar.css',
})
export class Appbar {
  assetState = inject(AssetStateService);

  assetCount = this.assetState.assetCount;
}
