import { Component } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private serverUrl = 'http://localhost:8080/ws';
  title = 'ng-chat-app';
  private stompClient;

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    let ws = new SockJS("http://localhost:8080/ws");
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe('/topic/public', (payload) => {
        that.onMessageReceived(payload);
      });
    });
  }

  /**
   * Extract details from the payload
   */
  public onMessageReceived(payload: any) {
    let message = JSON.parse(payload.body);
    if (message) {
      $(".chat").append("<div class='message'>" + message.content + "</div>");
    }
  }

  /**
   * Send message to socket
   */
  sendMessage(message) {
    console.log("sending message :" + message);
    var messageContent = message.trim();
    if (messageContent && this.stompClient) {
      var chatMessage = {
        sender: "To-Be-Changed",
        content: message,
        type: 'CHAT'
      };
    }

    this.stompClient.send('/app/chat.sendMessage', {}, JSON.stringify(chatMessage));
    $('#input').val('');
  }


}
