import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [RouterLink]
})
export class Home {
  protected readonly title = signal('Album Browser');
}
