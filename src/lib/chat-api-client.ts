export interface ChatMessage {
  message: string;
}

export class ApiClient {
  private host: string;
  private userId: string;

  constructor(host: string = 'http://localhost:8080') {
    this.host = host;
    this.userId = this.getUserId();
  }

  private getUserId(): string {
    let userId = localStorage.getItem('chat-user-id');
    if (!userId) {
      userId = 'user_' + Date.now();
      localStorage.setItem('chat-user-id', userId);
    }
    return userId;
  }

  generateChatId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  getUserIdValue(): string {
    return this.userId;
  }

  async postMessage(chatId: string, message: string, appName: string = "AIAgent") {
    const response = await fetch(`${this.host}/api/chat?app=${appName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        userid: this.userId,
        chatid: chatId,
      }),
    });

    if (!response.ok) {
      console.error('Failed to send message:', response.status);
      throw new Error(`${response.status}`);
    }

    return await response.json();
  }

  async getUserChats(appName: string = 'AIAgent') {
    const response = await fetch(
      `${this.host}/api/userchats?app=${appName}&userid=${this.userId}`,
      { method: 'GET' }
    );

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return await response.json();
  }

  async getChatMessages(chatId: string, appName: string = 'AIAgent'){
    const response = await fetch(
      `${this.host}/api/chatmessages?app=${appName}&userid=${this.userId}&chatid=${chatId}`,
      { method: 'GET' }
    );

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return await response.json();
  }

  async deleteChat(chatId: string, appName: string = 'AIAgent'){
    const response = await fetch(
      `${this.host}/api/userchat?app=${appName}&userid=${this.userId}&chatid=${chatId}`,
      { method: 'DELETE' }
    );

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
  }
}