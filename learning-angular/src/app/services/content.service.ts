import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };

  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>('api/content', content, this.httpOptions);
  }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("api/content");
  }
}
