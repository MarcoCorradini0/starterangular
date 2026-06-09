import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Prenotazione } from '../../models/prenotazione';
import { PrenotazioneService } from '../../services/prenotazione.service';
import { Footer } from "../../components/footer/footer";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prenotazioni',
  standalone: true,
  imports: [Footer, FormsModule, CommonModule],
  templateUrl: './prenotazioni.component.html',
  styleUrl: './prenotazioni.component.css',
})
export class PrenotazioniComponent implements OnInit {
  list: Prenotazione[] = [];
  form: Prenotazione = {
    nomeCliente: '',
    gusto: '',
    quantita: 1,
    dataRitiro: ''
  }
  constructor(
    private service: PrenotazioneService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadAll();
  }
  loadAll() {
    this.service.getAll().subscribe({
      next: res => {
        this.list = res;
        this.cd.detectChanges();
      },
      error: err => console.error(err)
    });
  }

  save() {
    this.service.create(this.form).subscribe({
      next: () => {
        this.loadAll();
        this.form = {
          nomeCliente: '',
          gusto: '',
          quantita: 1,
          dataRitiro: '',
        };
      },
      error: err => console.error(err)
    });
  }

  delete(id?: number) {
    if (!id) return;
    this.service.delete(id).subscribe({
      next: () => this.loadAll(),
      error: err => console.error(err)
    });
  }
}
