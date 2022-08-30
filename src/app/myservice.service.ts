import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }
/* Signup Form Method*/
 signupForm(data:any){
    console.log('data');
    return this.http.post('http://localhost:8080/api-gateway/user/v1/create',data);
 }
/* Login Form Method*/
 loginFormData(data:any){
  console.log('data');
  return this.http.post('http://localhost:8080/api-gateway/login/user',data);
}
}
