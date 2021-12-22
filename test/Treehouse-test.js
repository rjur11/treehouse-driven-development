const chai = require("chai");
const expect = chai.expect;
const Treehouse = require("../src/Treehouse");

describe("Treehouse", () => {
  let treehouse;
  let expensiveTH;
  beforeEach(() => {
    treehouse = new Treehouse(50, "$", 2, 1, "Cleveland", false);
    expensiveTH = new Treehouse(350, "$$$", 4, 2, "Boulder", false);
  });
  it("should be a function", () => {
    expect(Treehouse).to.be.a("function");
  });
  it("should be a new instance of Treehouse", () => {
    expect(treehouse).to.be.an.instanceOf(Treehouse);
  });
  it("should have a price", () => {
    expect(treehouse.price).to.equal(50);
  });
  it("should have a pricePoint", () => {
    expect(treehouse.pricePoint).to.equal("$");
  });
  it("should have some bedrooms", () => {
    expect(treehouse.bedrooms).to.equal(2);
  });
  it("should have at least one bathroom", () => {
    expect(treehouse.bathrooms).to.equal(1);
  });
  it("should have a location", () => {
    expect(treehouse.location).to.equal("Cleveland");
  });
  it("should start as not booked", () => {
    expect(treehouse.isBooked).to.equal(false);
  });
  it("should be able to reduce price when a number is passed in", () => {
    treehouse.reducePrice(50);
    expect(treehouse.price).to.equal(25);
  });
  it("should be able to update pricePoint based off original price", () => {
    expensiveTH.reducePrice(50);
    expect(expensiveTH.pricePoint).to.equal("$$");
  });
});
