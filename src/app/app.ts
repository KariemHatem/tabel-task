import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tabel } from './shared/components/tabel/tabel/tabel';
import { Navbar } from './features/layout/navbar/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tabel, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('task1');
}
