import { Injectable } from '@angular/core';
import {Observable} from 'rxjs-compat';
import { HttpClient } from '@angular/common/http';
import { ChatHistory } from '../models/ChatHistory';


@Injectable({
  providedIn: 'root'
})
export class ChatappService {
  private apiBaseURL = 'http://localhost:8080/'
  private endPointChatHistory = 'messagehistory';
  
  constructor(private _http: HttpClient){};

   getChatHistory(): Observable<ChatHistory[]> { 
    return this._http.get<ChatHistory[]>(this.apiBaseURL+this.endPointChatHistory);
    
   }
}
