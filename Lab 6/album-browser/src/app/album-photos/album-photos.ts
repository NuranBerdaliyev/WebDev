import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo.model';

@Component({
  standalone: true,
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
  imports: [RouterLink]
})
export class AlbumPhotos implements OnInit {
  photos = signal<Photo[]>([]);
  loading = signal(true);
  albumId = signal(0);

  constructor(private route: ActivatedRoute, private router: Router, private albumService: AlbumService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumId.set(id);
    this.albumService.getAlbumPhotos(id).subscribe(data => {
      this.photos.set(data);
      this.loading.set(false);
    });
  }

  back() {
    this.router.navigate(['/albums', this.albumId()]);
  }
}