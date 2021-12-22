const chai = require("chai");
const expect = chai.expect;

const Customer = require("../src/Customer");
const Treehouse = require("../src/Treehouse");

describe("Customer", () => {
  let customer;
  let treehouse;
  let expensiveTH;
  beforeEach(() => {
    customer = new Customer(250, []);
    treehouse = new Treehouse(50, "$", 2, 1, "Cleveland", false);
    expensiveTH = new Treehouse(350, "$$$", 4, 2, "Boulder", false);
  });
  it("should be a function", () => {
    expect(Customer).to.be.a("function");
  });
  it("should be a new instance of Customer", () => {
    expect(customer).to.be.an.instanceOf(Customer);
  });
  it("should have a budget", () => {
    expect(customer.budget).to.equal(250);
  });
  it("should start with 0 bookings", () => {
    expect(customer.bookings.length).to.equal(0);
  });
  it("should check to see if customer has enough budget to make a booking", () => {
    expect(customer.checkBudget(treehouse)).to.equal(true);
  });
  it("should allow customer to book house if enough budget", () => {
    customer.bookHouse(treehouse);
    expect(customer.bookings).to.deep.equal([treehouse]);
  });
  it("should decrease customer budget after adding treehouse to bookings", () => {
    customer.bookHouse(treehouse);
    expect(customer.budget).to.equal(200);
  });
  it("should update treehouse isBooked to true", () => {
    customer.bookHouse(treehouse);
    expect(treehouse.isBooked).to.equal(true);
  });
  it("should not allow customer to book house if not enough budget", () => {
    customer.bookHouse(expensiveTH);
    expect(customer.bookings).to.deep.equal([]);
  });
  it("should return a decline message if not enough budget", () => {
    customer.bookHouse(expensiveTH);
    expect(customer.bookHouse(expensiveTH)).to.equal(
      "Sorry, you cannot afford this house."
    );
  });
});
