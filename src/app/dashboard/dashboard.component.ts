import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../components/loader/loading.service'; // Importe o serviço de loading

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;
  isLoading: boolean = true; // Adicione uma variável para controlar o estado do loading

  constructor(private httpClient: HttpClient, private loadingService: LoadingService) { } // Injete o serviço de loading

  ngOnInit() {
    this.loadSkills();
  }

  loadSkills() {
    this.httpClient.get('/api/skills').subscribe(
      (ret: Array<any>) => {
        this.cards = ret;
        this.isLoading = false; // Defina isLoading como false quando os cards forem carregados
      },
      (error) => {
        // Lógica para lidar com erros na requisição HTTP, se necessário
        console.error('Erro na requisição HTTP:', error);
        this.isLoading = false; // Certifique-se de definir isLoading como false em caso de erro também
      }
    );
  }
}
