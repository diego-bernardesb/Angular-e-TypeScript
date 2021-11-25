"use strict";
exports.__esModule = true;
//importa as classes para serem usadas externamente
var base_ship_1 = require("./base-ship");
var starfigther_1 = require("./starfigther");
var ship = new base_ship_1.Spacecraft('hyperdrive');
ship.jumpToHyperspace();
var falcon = new starfigther_1.MillenniumFalcon();
falcon.jumpToHyperspace();
var goodForThejob = function (ship) { return ship.cargoContainers > 2; };
console.log("A MillenniumFalcon \u00E9 boa para o trabalho? ".concat(goodForThejob(falcon) ? "Sim" : "Não"));
