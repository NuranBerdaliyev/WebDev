import { Component, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
  imports: [FormsModule, RouterLink]
})
export class AlbumDetail implements OnInit {
  album = signal<Album>({ id: 0, userId: 0, title: '' });
  loading = signal(true);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album.set(data);
      this.loading.set(false);
    });
  }

  save() {
    if (!this.album()) return;
    this.albumService.updateAlbum(this.album()!).subscribe();
  }

  back() {
    this.router.navigate(['/albums']);
  }
}