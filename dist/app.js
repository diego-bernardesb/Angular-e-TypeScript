var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpToHyperspace = function () {
        console.log("Entrando no hyper espa\u00E7o com ".concat(this.propulsor));
    };
    return Spacecraft;
}());
var ship = new Spacecraft('hyperdrive');
ship.jumpToHyperspace();
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainers = 4;
        return _this;
    }
    MillenniumFalcon.prototype.jumpToHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpToHyperspace.call(this);
        }
        else {
            console.log("Falha ao tentar entrar para o hyper espaço");
        }
    };
    return MillenniumFalcon;
}(Spacecraft));
var falcon = new MillenniumFalcon();
falcon.jumpToHyperspace();
var goodForThejob = function (ship) { return ship.cargoContainers > 2; };
console.log("A MillenniumFalcon \u00E9 boa para o trabalho? ".concat(goodForThejob(falcon) ? "Sim" : "Não"));
