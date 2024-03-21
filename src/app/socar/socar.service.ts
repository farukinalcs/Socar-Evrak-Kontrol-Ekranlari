import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



const API_DYNAMİC = `${environment.apiUrl}/Dynamic`;

@Injectable({
  providedIn: 'root'
})
export class SocarService {

  constructor(private http : HttpClient) { }
  
  // getTerminal(token){
  //   var params = {Name:'tokenid='+ token + '&point=lastpass&islemtipi=p'}
  //   return this.http.get<any>(API_DYNAMİC,{params});
  // }

  getData(token):Observable<any>{
    var params = {Name:'tokenid='+ token + '&point=lastpass&islemtipi=sc&terminalid='+ 4524}
    return this.http.get<any>(API_DYNAMİC,{params});
  }

  
}
