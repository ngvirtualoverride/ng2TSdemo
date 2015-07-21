if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var app_data_list_1 = require('components/app.data.list');
var http_1 = require('angular2/http');
var App = (function () {
    function App() {
        this.title = "Data List example";
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'demo-app'
        }),
        angular2_1.View({
            template: "\n\t\t<h1>{{ title }}</h1>\n\t\t<data-list></data-list>\n\t",
            directives: [app_data_list_1.DataList]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [http_1.httpInjectables]);
//# sourceMappingURL=app.js.map