const Treehouse = require("../src/Treehouse");

class Customer {
  constructor(budget, bookings) {
    this.budget = budget;
    this.bookings = bookings || [];
  }
  checkBudget(treehouse) {
    return this.budget >= treehouse.price;
  }
  bookHouse(treehouse) {
    if (this.checkBudget(treehouse)) {
      this.bookings.push(treehouse);
      this.budget -= treehouse.price;
      treehouse.isBooked = true;
    } else {
      return "Sorry, you cannot afford this house.";
    }
  }
}

module.exports = Customer;
