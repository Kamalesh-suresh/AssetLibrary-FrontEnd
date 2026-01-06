import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AssetPayload {
  title: string;
  description: string;
  mac: string;
  link: string;
}

@Injectable({ providedIn: 'root' })
export class AssetService {
  private baseUrl = 'http://localhost:3000/api/asset';

  constructor(private http: HttpClient) {}

  getAssets(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  createAsset(payload: AssetPayload): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.baseUrl}/create`, payload, { headers });
  }

  updateAsset(id: string, payload: AssetPayload): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch(`${this.baseUrl}/${id}`, payload, { headers });
  }

  deleteAsset(id: string): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.baseUrl}/${id}`, { headers });
  }

  getAssetById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }
}
