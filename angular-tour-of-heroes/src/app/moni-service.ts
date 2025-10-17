import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message-service';
import { MoniMensaje } from './moniMensaje';

@Injectable({
  providedIn: 'root'
})
export class MoniService {
  private moniUrl = 'https://8vdbttfkeg.execute-api.us-east-1.amazonaws.com/';
  constructor(private messageService: MessageService) { }

  moniMensajes : MoniMensaje[] = []
  error: string | null = null;

  async getMessage() {
    try {
      const response = await fetch(this.moniUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.moniMensajes[0] = await response.json(); // Or response.text() if your Lambda returns plain text
      return this.moniMensajes[0];
    } catch (error) {
      throw new Error(`Error fetching data:: ${error}`);
    }
  }

  private log(message: string) {
    this.messageService.add(`Moni Service: ${message}`)
  }

}
