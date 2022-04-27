import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  BaseUrl='https://api.github.com/users';
  constructor(private http:HttpClient) { }
  async getUser(userName:string){
    let response=this.http.get('${this.BaseUrl}/${userName}');
    return await lastValueFrom(response).then((result)=> result);
  }
}
