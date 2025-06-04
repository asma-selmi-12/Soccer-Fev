import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private httpClient: HttpClient) {}

  private apiUrl = 'https://v3.football.api-sports.io/teams?country=TUNISIA';
  private apiKey = 'd02dcf62e03306345a55cc9b9ad3aa40';

  addTeams(data: any) {
    console.log('here into service data', data);

    return this.httpClient.post<{ message: any }>(
      `${environment.apiUrl}/teams/create`,
      data
    );
  }
  getAllTeams() {
    console.log('here into get all teams');
    return this.httpClient.get<{ data: any }>(
      `${environment.apiUrl}/teams/getAll`
    );
  }
  getTeamsById(id: any) {
    return this.httpClient.get<{ data: any }>(
      `${environment.apiUrl}/teams/getById/${id}`
    );
  }
  updateTeams(data: any) {
    console.log('here into update team');
    console.log(data._id);

    return this.httpClient.put<{ message: any }>(
      `${environment.apiUrl}/teams/update/${data._id}`,
      data
    );
  }
  deletTeams(id: any) {
    console.log(id);

    return this.httpClient.delete<{ message: any }>(
      `${environment.apiUrl}/teams/delete/${id}`
    );
  }


  getApiTeams() {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    });

    return this.httpClient.get<any>(this.apiUrl, { headers });
  }
}
