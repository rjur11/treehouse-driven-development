class Treehouse {
  constructor(price, pricePoint, bedrooms, bathrooms, location, isBooked) {
    this.price = price;
    this.pricePoint = pricePoint;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.location = location;
    this.isBooked = isBooked || false;
  }

  reducePrice(percent) {
    const reduction = (percent / 100) * this.price;
    this.price -= reduction;
    if (this.price <= 100) {
      this.pricePoint = "$";
    } else if (this.price > 100 && this.price <= 200) {
      this.pricePoint = "$$";
    } else if (this.price > 200) {
      this.pricePoint = "$$$";
    } else {
      console.log("Please enter a valid price.");
    }
  }
}

module.exports = Treehouse;
