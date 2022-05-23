import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  // data = '../../assets/test-data/order-data.json';
  base_url = `https://bookcart.azurewebsites.net/`;
  constructor(private _http: HttpClient) {}

  getMyOrders(userId: number): Observable<any> {
    const endPoint = `api/Order/`;

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + 'PASTE_YOUR_TOKEN_HERE');

    return this._http.get(this.base_url + endPoint + userId, {
      headers: headers,
    });
  }
}
