import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AssetService {
  private baseUrl = 'http://localhost:3000/api/asset';

  constructor(private http: HttpClient) {}

  getAssets(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
}
