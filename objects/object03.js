var rentalCar = {
    numberofRentalDays: 3,
    dailyRentalRate: 50,
    carType: "Sedan",
    taxRate: .07,
    grandTotal: function () {
        return (this.numberofRentalDays * this.dailyRentalRate) + ((this.numberofRentalDays * this.dailyRentalRate) * this.taxRate);
    }
};

console.log(rentalCar.grandTotal());
    
// console.log(rentalCar);
// research Please Remeber My Dear Aunt Sally
// Order of Operation

//---------------------

