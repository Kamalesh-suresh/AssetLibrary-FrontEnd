import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AssetStateService {
  assetCount = signal<number>(0);

  setCount(count: number) {
    this.assetCount.set(count);
  }
}
