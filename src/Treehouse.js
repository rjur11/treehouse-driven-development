class Treehouse {
  constructor(price, pricePoint, bedrooms, bathrooms, location, isBooked) {
    this.price = price;
    this.pricePoint = pricePoint;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.location = location;
    this.isBooked = isBooked || false;
  }

  reducePrice(price) {
    return (this.price -= price);
  }

  updatePricePoint(price) {
    switch (price) {
      case this.price <= 100:
        return this.pricePoint === "$";
        break;
      case this.price >= 101 && this.price <= 200:
        return this.pricePoint === "$$";
        break;
      case this.price <= 201:
        return this.pricePoint === "$$$";
        break;
      default:
        console.log("Please enter a valid price.");
    }
  }
}

module.exports = Treehouse;
