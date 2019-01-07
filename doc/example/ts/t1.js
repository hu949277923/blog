var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distanceInMeters) {
        console.log("test" + this.name + " moved " + distanceInMeters);
    };
    return Animal;
}());
