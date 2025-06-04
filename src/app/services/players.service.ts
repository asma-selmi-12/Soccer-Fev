import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {

  constructor(private httpClient: HttpClient) {}

  addPlayers(data: any, img: any) {

    const formData = new FormData

    // formData.append('name',data.playername)
    formData.append('playerName',data.playerName)
    formData.append('post',data.post)
    formData.append('playerNumber',data.playerNumber)
    formData.append('idTeams',data.idTeams)
    formData.append('image',img)
    console.log('here into service players', img);

    return this.httpClient.post<{message: any }>(`${environment.apiUrl}/player/create`,formData);
  }
  getAllPlayers() {
    return this.httpClient.get<{ players: any }>(
      `${environment.apiUrl}/player/getAll`
    );
  }
  getPlayersById(id: any) {
    console.log('here into get player by id');

    return this.httpClient.get<{ player: any }>(
      `${environment.apiUrl}/player/getById/${id}`
    );
  }
  updatePlayers(data: any,file:any) {
    console.log(data);
    console.log(file);
    console.log( "ere image",data.img);
    
    console.log('here into update service');
   let  formData
    
    if (file) {
      formData = new FormData
      formData.append('_id',data._id)

      formData.append('playerName',data.playerName)
      formData.append('post',data.post)
      formData.append('playerNumber',data.playerNumber)
      formData.append('idTeams',data.idTeams)
      formData.append('image',file)
      
    
    } 
    return this.httpClient.put<{ message: any }>(`${environment.apiUrl}/player/update`,file? formData:data);
    
     
      
    
    
      
    
    
    
    
     
  
    

  //   formData.forEach((value, key) => {
  //     console.log(key, value);
  // });
    
  }
  deletPlayers(id: any) {
    console.log('here into delet teams');

    return this.httpClient.delete<{ message: any }>(
      `${environment.apiUrl}/player/delete/${id}`
    );
  }


getPlayerByNumber(data:any){
console.log('service',data);

  return this.httpClient.post<{data:any }>(`${environment.apiUrl}/player/search`,data);
}


}
