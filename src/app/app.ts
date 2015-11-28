/// <reference path="libs/jquery.d.ts" />

import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice Polo"},
    { "id": 12, "name": "Narco"},
    { "id": 13, "name": "Some person1"},
    { "id": 14, "name": "Some person..."},
    { "id": 15, "name": "Some person..."},
    { "id": 16, "name": "Some person..."},
    { "id": 17, "name": "Some person..."},
    { "id": 18, "name": "Some person..."},
];

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/hero.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
    styleUrls: ['app/styles/style.css']
})

class AppComponent {
    public title = 'Tour of Heroes';
    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
    public heroes = HEROES;
    public selectedHero: Hero;

    onSelect(hero: Hero) { this.selectedHero = hero; }
    getSelectedClass(hero: Hero) {
        return { 'selected' : hero === this.selectedHero };
    }
}

class Hero {
    id: number;
    name: string;
}

bootstrap(AppComponent);