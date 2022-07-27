const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dino;

  beforeEach(function () {
    park = new Park('Jurassic Park', 10);
    dino = new Dinosaur('T-rex', 'carnivore', 100);
    dino2 = new Dinosaur('Velociraptor', 'carnivore', 20);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dino);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dino);
    park.removeDinosaur(dino);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dino);
    park.addDinosaur(dino2);
    const actual = park.mostPopularDinosaur();
    assert.deepStrictEqual(actual, dino);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dino);
    park.addDinosaur(dino2);
    const actual = park.getDinosaurBySpecies('T-rex');
    assert.deepStrictEqual(actual, dino);
    //checking park.dinosaurs unaffected by .getDinosaurByName()
    // assert.deepStrictEqual(park.dinosaurs, [dino, dino2])
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dino);
    park.addDinosaur(dino2);
    const actual = park.getDailyVisitors();
    assert.strictEqual(actual, 120);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dino);
    park.addDinosaur(dino2);
    const actual = park.getAnnualVisitors();
    assert.strictEqual(actual, 43800);
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dino);
    park.addDinosaur(dino2);
    const actual = park.getAnnualRevenue();
    assert.strictEqual(actual, 438000);
  });

  it('should be able to remove dinosaurs by species', function() {
    park.addDinosaur(dino);
    park.addDinosaur(dino2);
    park.addDinosaur(dino);
    park.addDinosaur(dino2);
    const actual = park.removeDinosaurBySpecies('T-rex');
    assert.deepStrictEqual(actual, [dino2, dino2]);
  });

});
