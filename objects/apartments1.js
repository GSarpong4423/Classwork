var apartment = {
    address: "100 Niantic Ave",
    dailyRate: 35,
    numberOfdays: 31,
    occupancy: 1,
    monthTotal: function apartment(dailyCost, numberOfdays) {
    return this.dailyRate * this.numberOfdays;
    }
};

console.log(apartment.address, "cost", apartment.dailyRate, "per day", "for", apartment.occupancy, "occupancy",". The total is ", apartment.monthTotal(), "for", apartment.numberOfdays, "days");

    
