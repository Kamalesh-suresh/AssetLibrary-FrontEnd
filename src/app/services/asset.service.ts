import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  GetAssetsResponse,
  AssetResponse,
  DeleteAssetResponse,
  AssetPayload,
} from '../../models/asset.model';

@Injectable({ providedIn: 'root' })
export class AssetService {
  private baseUrl = `${environment.apiBaseUrl}/asset`;

  constructor(private http: HttpClient) {}

  getAssets(): Observable<GetAssetsResponse> {
    return this.http.get<GetAssetsResponse>(`${this.baseUrl}/all`);
  }

  createAsset(payload: AssetPayload): Observable<AssetResponse> {
    return this.http.post<AssetResponse>(`${this.baseUrl}/create`, payload);
  }

  updateAsset(id: string, payload: AssetPayload): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}`, payload);
  }

  deleteAsset(id: string): Observable<DeleteAssetResponse> {
    return this.http.delete<DeleteAssetResponse>(`${this.baseUrl}/${id}`);
  }

  getAssetById(id: string): Observable<AssetResponse> {
    return this.http.get<AssetResponse>(`${this.baseUrl}/get/${id}`);
  }
}
