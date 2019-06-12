var airline = {
    flight: "roundTrip",
    flightCost: 275,
    ticketsQty: 7,
    airlineType: "Delta",
    taxRate: .07,
    grandTotal: function () {
        return (this.flightCost * this.ticketsQty) + ((this.flightCost * this.ticketsQty) * this.taxRate);
     }
};

console.log(airline.grandTotal());