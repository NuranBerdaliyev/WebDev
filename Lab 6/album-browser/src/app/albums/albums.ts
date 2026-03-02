import { Component, signal, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: './albums.html',
  styleUrl: './albums.css',
  imports: [RouterLink]
})
export class Albums implements OnInit {
  albums = signal<Album[]>([]);
  loading = signal(true);

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(data => {
      this.albums.set(data);
      this.loading.set(false);
    });
  }

  delete(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums.set(this.albums().filter(a => a.id !== id));
    });
  }
}