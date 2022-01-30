import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileuploadserviceService {
  private baseUrl = 'http://localhost:52635';  

  constructor(private http: HttpClient) {}   

  public getFiles(): Observable <any[]> {  
    return this.http.get <any[]> (this.baseUrl + '/api/upload/get-numbers');   
  }  

  UploadDocument(data: FormData): Observable < string > {  
      let headers = new HttpHeaders();  
      headers.append('Content-Type', 'application/json');  
      const httpOptions = {  
          headers: headers  
      };  
      return this.http.post <string> (this.baseUrl + '/api/upload/excel-document', data, httpOptions);  
  }  
}
