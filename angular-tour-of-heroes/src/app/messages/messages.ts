import { Component } from '@angular/core';
import { MessageService } from '../message-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  imports: [CommonModule],
  templateUrl: './messages.html',
  styleUrl: './messages.css'
})
export class Messages {
  constructor(public messageService: MessageService) {}

}
