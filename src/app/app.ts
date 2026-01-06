import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Appbar } from './appbar/appbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Appbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('assetLibrary');
  constructor(public router: Router) {}
}
