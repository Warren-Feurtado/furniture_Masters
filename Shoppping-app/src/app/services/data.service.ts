import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemInterface } from '../interfaces/items';
import { map, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = '/api/items_list';

  constructor(private httpClient: HttpClient) { }

  public getAllItems():Observable<ItemInterface[]> {
    return this.httpClient.get<ItemInterface[]>(this.REST_API_SERVER)
  }

  public createItem(data: any): Observable<ItemInterface[]> {
    return this.httpClient.post<ItemInterface[]>(this.REST_API_SERVER, data);
  }

  public getItemsById(id: number):Observable<ItemInterface[]> {
    const url = `${this.REST_API_SERVER}/${id}`
    return this.httpClient.get<ItemInterface[]>(url);
  }

  public updateItem(id: any, data: any): Observable<any> {
    return this.httpClient.put<ItemInterface[]>(`${this.REST_API_SERVER}/${id}`, data);
  }

  public deleteItem(id: any): Observable<ItemInterface[]> {
    return this.httpClient.delete<ItemInterface[]>(`${this.REST_API_SERVER}/${id}`);
  }

  public adminGetItems(): Observable<ItemInterface[]> {
    return this.httpClient.get<ItemInterface[]>(this.REST_API_SERVER)
  }

}
