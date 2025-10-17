import { Component } from '@angular/core';
import { MoniService } from '../moni-service';
import { MoniMensaje } from '../moniMensaje';

@Component({
  selector: 'app-moni-component',
  imports: [],
  templateUrl: './moni-component.html',
  styleUrl: './moni-component.css'
})
export class MoniComponent {

  moniMensajes: MoniMensaje[] = []

  constructor(private moniService: MoniService) { }

  ngOnInit() {
    this.getMoniMessage();
  }


  async getMoniMessage(): Promise<void> {
    try {
      this.moniMensajes[0] = await this.moniService.getMessage()
    } catch (e: any) {
      throw new Error(`Error fetching data:: ${e}`);
    }
  }
}
