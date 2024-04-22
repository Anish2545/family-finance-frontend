import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transactionhistory.page.html',
  styleUrls: ['./transactionhistory.page.scss'],
})
export class TransactionHistoryPage {
  transactions: any[] = []; // Assuming transactions are stored in this array

  constructor() {
    // Assuming you fetch transactions from somewhere (e.g., a service) and assign them to the transactions array
    this.fetchTransactions();
  }

  fetchTransactions() {
    // Example of fetching transactions (replace with your actual data-fetching logic)
    // Assuming transactions have properties: date, amount, type, category, and image
    this.transactions = [
      { date: '2024-04-17', amount: 50, type: 'Expense', category: 'Food'},
      { date: '2024-04-16', amount: 100, type: 'Income', category: 'Salary' },
      // Add more transactions as needed
    ];
  }

  loadMoreTransactions(event: any) {
    // Logic to load more transactions when scrolling (if applicable)
    // For example, fetch more transactions and push them into the transactions array
    // Ensure to call event.target.complete() when done loading more data
  }
}
