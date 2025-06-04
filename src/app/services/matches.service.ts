import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  constructor(private httpClient: HttpClient) {}
  addMatch(data: any) {
    console.log(data);

    return this.httpClient.post<{ message: any }>(`${environment.apiUrl}/matches/create`, data);
  }
  getAllMatches() {
    return this.httpClient.get<{ data: any }>(`${environment.apiUrl}/matches/getAll`);
  }
  getMatchById(id: any) {
    console.log('here into match service', id);

    return this.httpClient.get<{ match: any }>(`${environment.apiUrl}/matches/getById/${id}`);
  }
  updateMatch(data: any) {
    console.log('here into service update match',data);

    return this.httpClient.put<{ message: any }>(`${environment.apiUrl}/matches/update`, data );
  }
  deletMatch(id:any) {
    console.log('here into delete match');
    console.log(id);
    
    return this.httpClient.delete<{message: any}>(`${environment.apiUrl}/matches/delete/${id}`)
  }




}