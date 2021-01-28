import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { Banner } from '../models/banner.model';
import { CartAddRequest } from '../models/cart.model';
import { SignIn, SingUp } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://localhost:5000';
  
  constructor(private http: HttpClient) { }

  fetchCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  fetchBanners(): Observable<Banner[]> {
    return this.http.get<Banner[]>(`${this.apiUrl}/banners`);
  }

  addToCart(cartRequest: CartAddRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/addToCart`, cartRequest);
  }

  signIn(singInData: SignIn): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, singInData);
  }

  signUp(singUpData: SingUp): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, singUpData);
  }
}
