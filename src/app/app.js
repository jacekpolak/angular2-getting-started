var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var HEROES = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Some person1" },
    { "id": 14, "name": "Some person..." },
    { "id": 15, "name": "Some person..." },
    { "id": 16, "name": "Some person..." },
    { "id": 17, "name": "Some person..." },
    { "id": 18, "name": "Some person..." },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
        this.heroes = HEROES;
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n\n        <h2>My Heroes</h2>\n        <ul class=\"heroes\">\n            <li *ng-for=\"#hero of heroes\">\n                <!-- each hero goes here -->\n                <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n            </li>\n        </ul>\n\n        <h2>{{hero.name}} details!</h2>\n        <div>\n            <label for=\"id\">id: </label> {{hero.id}}\n        </div>\n        <div>\n            <label for=\"name\">name: </label>\n            <input type=\"text\" id=\"name\" [(ng-model)]=\"hero.name\" placeholder=\"name\" /> \n        </div>  \n    ",
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFor],
            styles: ["\n        .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n        .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n        .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n        .heroes .badge {\n            font-size: small;\n            color: white;\n            padding: 0.1em 0.7em;\n            background-color: #369;\n            line-height: 1em;\n            position: relative;\n            left: -1px;\n            top: -1px;\n        }\n        .selected { background-color: #EEE; color: #369; }\n    "],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
var Hero = (function () {
    function Hero() {
    }
    return Hero;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map