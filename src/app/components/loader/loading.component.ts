import { Component } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  template: `
    <div class="loading-overlay" *ngIf="isLoading">
      <mat-spinner class="loading-spinner" diameter="50" color="primary"></mat-spinner>
    </div>
  `,
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  isLoading: boolean = false;

  constructor(private loadingService: LoadingService) {
    this.loadingService.loading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}
