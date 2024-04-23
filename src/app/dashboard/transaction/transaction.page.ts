import { Component } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage {

  items: any[] = []; // Array to hold user data
  currentPage = 1; // Track current page of data
  totalPages = 5; // Assuming there are 5 pages of data in total

  constructor(private router: Router) {
    // Load initial user data
    this.loadUserData();
  }

  // Method to load user data
  loadUserData() {
    // Simulate fetching user data from API
    // Replace this with actual API call to fetch user data
    for (let i = 1; i <= 10; i++) {
      this.items.push({
        title: 'User ' + (this.items.length + i),
        subtitle: 'Relation ' + (this.items.length + i),
        image: 'https://via.placeholder.com/150' // Placeholder image URL
      });
    }
  }

  // Method to handle infinite scroll event
  onIonInfinite(event: any) {
    // Simulate loading more data with a delay
    setTimeout(() => {
      this.currentPage++;
      if (this.currentPage <= this.totalPages) {
        this.loadUserData();
        event.target.complete(); // Complete the infinite scroll event
      } else {
        event.target.disabled = true; // Disable infinite scroll if all data is loaded
      }
    }, 1000); // Adjust delay as needed
  }

  // Method to navigate to SubuserPage
  navigateToSubuserPage() {
    this.router.navigate(['/dashboard/subuser']); // Replace '/subuser' with the actual route path
  }
}
