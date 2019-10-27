var App = /** @class */ (function () {
    function App(name) {
        this.sum = 100;
        name = name;
    }
    App.prototype.get = function (info) {
        this.sum += info;
        return this.sum;
    };
    return App;
}());
var app = new App('jack');
console.log(app.get(11));
