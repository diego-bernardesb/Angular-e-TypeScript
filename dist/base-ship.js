"use strict";
exports.__esModule = true;
exports.Spacecraft = void 0;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpToHyperspace = function () {
        console.log("Entrando no hyper espa\u00E7o com ".concat(this.propulsor));
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
