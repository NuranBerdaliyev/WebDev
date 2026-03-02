import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';
import { signal } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  
  // Сигнал для локального списка альбомов
  albums = signal<Album[]>([]);

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`).pipe(
      tap(data => this.albums.set(data))
    );
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album).pipe(
      tap(updated => {
        // Обновляем локальный сигнал после сохранения
        this.albums.set(this.albums().map(a => a.id === updated.id ? updated : a));
      })
    );
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`).pipe(
      tap(() => {
        // Удаляем локально
        this.albums.set(this.albums().filter(a => a.id !== id));
      })
    );
  }
}