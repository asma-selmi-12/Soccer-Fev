import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { environment } from 'src/environments/environment';

export interface JwtPayload {
  userName:string,
  role:string,
  id:string,
  exp:string,
  iat:string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  connectedUser: any;
  constructor(private httpClient:HttpClient) { }


  addUser(data: any) {
      console.log(data);
  
      return this.httpClient.post<{ message: any }>(`${environment.apiUrl}/users/create`, data);
    }


login(data:any){

  console.log('here into login sevice',data);
  
return this.httpClient.post<{ message: any,token:any }>(`${environment.apiUrl}/users/login`, data);

}


getUserRole():any{


  const token=localStorage.getItem('token')
  if (token) {
    const decode= jwtDecode<JwtPayload>(token);
    
  
    return  decode.role
    
  }
 



}


getweatherData(){
  let lat=36.8453878
  let lon=10.193848
  let key='2315f367166a927094addff4b275dd70'
  return this.httpClient.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
  }

}
