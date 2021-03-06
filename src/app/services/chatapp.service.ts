import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { HttpClient } from '@angular/common/http';
import { ChatHistory } from '../models/ChatHistory';
import { Config } from '../models/Config';

/**
 * Angular service to interect with the API
 * @author Tayab Hussain
 */

@Injectable({
  providedIn: 'root'
})
export class ChatappService {
  constructor(private _http: HttpClient) { };

  getChatHistory(): Observable<ChatHistory[]> {
    return this._http.get<ChatHistory[]>(Config.apiBaseURL + Config.endPointChatHistory);
  }
}
