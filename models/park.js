const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
    const dinosaurIndex = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(dinosaurIndex, 1);
}

Park.prototype.mostPopularDinosaur = function () {
    // this.dinosaurs = this.dinosaurs.sort((a, b) => a.guestsAttractedPerDay - b.guestsAttractedPerDay);
    // const bestDinosaur = this.dinosaurs.pop();
    // return bestDinosaur;
    return this.dinosaurs.reduce((a, b) => {
        return (a.guestsAttractedPerDay > b.guestsAttractedPerDay) ? a : b
    });
  
};

Park.prototype.getDinosaurBySpecies = function (species) {
    return this.dinosaurs.find(dinosaur => dinosaur.species === species)
}

Park.prototype.getDailyVisitors = function () {
    return this.dinosaurs.reduce((a, b) => a + b.guestsAttractedPerDay, 0)
}

Park.prototype.getAnnualVisitors = function () {
    return 365 * this.getDailyVisitors();
};

Park.prototype.getAnnualRevenue = function () {
    return this.getAnnualVisitors() * this.ticketPrice;
}

Park.prototype.removeDinosaurBySpecies = function (species) {
    // // find total dino by species
    // let total = 0;
    // for (dinosaur of this.dinosaurs) {
    //     if (dinosaur.species === species) {
    //         total++
    //     };
    // }
    // // sort dinos by species
    // this.dinosaurs = this.dinosaurs.sort((a, b) => {
    //     if (a.species < b.species) {
    //         return -1
    //     }
    //     if (a.species > a.species) {
    //         return 1
    //     }
    //     return 0
    // });
    // // find index of first instance
    // let firstInstance 
    // for (let dinosaur of this.dinosaurs) {
    //     if (dinosaur.species === species);
    //         firstInstance = this.dinosaurs.indexOf(dinosaur);
    //         break;
    //     };
    // // splice removing total dino of species
    // this.dinosaurs.splice(firstInstance, total)
    // return this.dinosaurs;
    this.dinosaurs = this.dinosaurs.filter(dinosaur => dinosaur.species !== species);
    return this.dinosaurs;
}


module.exports = Park;