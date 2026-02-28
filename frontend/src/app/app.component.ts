import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TransactionService, Transaction } from './services/transaction.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'finance-app';
  apiStatus = 'Checking...';
  transactions: Transaction[] = [];
  loading = true;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.checkApiStatus();
    this.loadTransactions();
  }

  checkApiStatus() {
    this.transactionService.getHealth().subscribe({
      next: (res) => {
        if (res.status === 'ok') {
          this.apiStatus = 'Connected';
        }
      },
      error: (err) => {
        console.error('API Error:', err);
        this.apiStatus = 'Offline';
      }
    });
  }

  loadTransactions() {
    this.loading = true;
    this.transactionService.getTransactions().subscribe({
      next: (res) => {
        this.transactions = res.data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load transactions', err);
        this.loading = false;
      }
    });
  }
}
