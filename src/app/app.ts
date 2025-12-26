import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './button/button';
import { Appbar } from "./appbar/appbar";

@Component({
  selector: 'app-root',
  imports: [Button, RouterOutlet, Appbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('assetLibrary');
}
