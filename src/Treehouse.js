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
    if (this.price <= 100) {
      this.pricePoint === "$";
    } else if (this.price >= 101 && this.price <= 200) {
      this.pricePoint === "$$";
    } else if (this.price <= 201) {
      this.pricePoint === "$$$";
    } else {
      console.log("Please enter a valid price.");
    }
  }
}

module.exports = Treehouse;
