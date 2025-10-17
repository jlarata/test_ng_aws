import { Component } from '@angular/core';
import { MoniService } from '../moni-service';

@Component({
  selector: 'app-moni-component',
  imports: [],
  templateUrl: './moni-component.html',
  styleUrl: './moni-component.css'
})
export class MoniComponent {

  mensaje: string = ""

  constructor(private moniService: MoniService) { }

  ngOnInit(): void {
    this.getMoniMessage();
  }


  async getMoniMessage(): Promise<void> {
    try {
      this.mensaje = await this.moniService.getMessage()
      console.log(this.mensaje)
    } catch (e: any) {
      console.log(e.message);
    }
    
    //  .subscribe(mensaje => this.mensaje = mensaje)
  }
}
