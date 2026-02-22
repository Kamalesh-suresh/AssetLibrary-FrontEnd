import { Component, inject } from '@angular/core';
import { AssetStateService } from '../services/state/assetState.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-appbar',
  imports: [RouterLink],
  templateUrl: './appbar.html',
  styleUrl: './appbar.css',
})
export class Appbar {
  assetState = inject(AssetStateService);

  assetCount = this.assetState.assetCount;

  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  isLogged = !!localStorage.getItem('token');
}
