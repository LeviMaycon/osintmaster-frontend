import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  private readonly apiUrl = 'http://127.0.0.1:8000/api/scan/';

  constructor(private readonly http: HttpClient) { }

  scanIp(ip: string, options: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, {ip, options});
  }
}
