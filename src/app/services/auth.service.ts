import { Injectable } from '@angular/core';
import { HttpClient, JsonpInterceptor} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable()
export class AuthService {
  readonly APIUrl = "https://localhost:8000"

  constructor(private http:HttpClient){}


  //Get User y Add User
  getUser():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/User/');
  }

  addUser(val:any){
    return this.http.post<any[]>(this.APIUrl + '/User/', val);
  }

  updateUser(val:any){
    return this.http.put<any[]>(this.APIUrl + '/User/', val);
  }

  login(username:string, password:string){
    return this.http.post<any>(this.APIUrl + `/auth/`,
    { username, password },httpOptions).pipe(
      map ( user => {
        if (user && user.token) {
          localStorage.setItem("currentUser", JSON.stringify(user));
        }
        return user;
      })
    );
  }
  // private BASE_URL: string ='http://localhost:5000/auth';
  // private headers: HttpHeaders = new HttpHeaders({'Conten-Type':'application/json'});
  // constructor (private http: HttpClient){}
  // login(user): Promise<any>{
  //   let url:string = `${this.BASE_URL}/login`;
  //   return this.http.post(url, user, {headers: this.headers}).toPromise();
  // }
}
