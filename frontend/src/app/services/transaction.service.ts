import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transaction {
    id: number;
    date: string;
    amount: number;
    category: string;
    description: string;
}

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    private apiUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) { }

    getHealth(): Observable<any> {
        return this.http.get(`${this.apiUrl}/health`);
    }

    getTransactions(): Observable<{ data: Transaction[] }> {
        return this.http.get<{ data: Transaction[] }>(`${this.apiUrl}/transactions`);
    }
}
