export interface Prenotazione {
  id?: number;
  nomeCliente: string;
  gusto: string;
  quantita: number;
  dataRitiro: string;
  eliminato?: boolean;
}