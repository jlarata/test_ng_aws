import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message-service';

@Injectable({
  providedIn: 'root'
})
export class MoniService {
  private moniUrl = 'https://8vdbttfkeg.execute-api.us-east-1.amazonaws.com/';
  constructor(private messageService: MessageService) { }

  data: string = ''
  error: string | null = null;

  async getMessage() {
    
    try {
      const response = await fetch(this.moniUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.data = await response.text(); // Or response.text() if your Lambda returns plain text

      return this.data;
    } catch (error) {
      this.error = "Error fetching data:, error";
      return this.error
    }
  }

  private log(message: string) {
    this.messageService.add(`Moni Service: ${message}`)
  }

}
