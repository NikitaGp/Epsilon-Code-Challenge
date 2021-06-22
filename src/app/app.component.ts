import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'epsilon';
  data = {
    "cookies": [ 
      { "name": "Chocolate Chip", "price": "$2.49", "category": "Standard" },
      { "name": "Sugar", "price": "$1.79", "category": "Standard" },
      { "name": "Snickerdoodle", "price": "$2.49", "category": "Standard" },
      { "name": "Oatmeal Raisin", "price": "$2.99", "category": "Standard" },
      { "name": "Peanut Butter", "price": "$2.99", "category": "Standard" },
      { "name": "White Chocolate Macadamia", "price": "$3.99", "category": "Premium" },
      { "name": "Red Velvet", "price": "$3.49", "category": "Premium" },
      { "name": "Black and White", "price": "$3.49", "category": "Premium" },
      { "name": "Triple Chocolate", "price": "$3.99", "category": "Premium" },
      { "name": "White Chocolate Coconut Divine", "price": "$5.99", "category": "Signature" },
      { "name": "Dark Chocolate Pistachio Sea Salt", "price": "$5.49", "category": "Signature" },
      { "name": "Brown Butter Bourbon Spice", "price": "$5.49", "category": "Signature" },
      { "name": "Bacon Chocolate Chip", "price": "$5.99", "category": "Signature" }
    ]
  }
  order = 'asc';
  column = 'name';
  perviousSortedColumn = 'name';
  sort(column) {
    this.column = column;
    if (this.perviousSortedColumn != column) {
      this.order = 'asc';
      this.perviousSortedColumn = column;
      return
    } 
    this.order = this.order === 'asc' ? 'des' : 'asc';
  }
  setClass(column) {
    if (this.column === column) {
      return this.order === 'asc' ? 'hide-des' : 'hide-asc';
    }
    return '';
  }
}
